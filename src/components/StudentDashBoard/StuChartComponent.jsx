import React from 'react';
//import { connect } from 'react-redux';
//import stuRecharts from './stuRecharts.js';
import Recharts from './StuRechartsComp.js';
import Vic from './VictoryChart.js';

export default class StuChartComponent extends React.Component {
     constructor(props) {
      super(props);
      //this.state = this.props
      this.rechartsArr = [];
      this.vicArr = [];

      var ind=0;
      var vic=0;

      for(var key in props.newCharts){
        if(this.props.newCharts[key].style ==='recharts'){
          this.rechartsArr[ind]=this.props.newCharts[key]
          ind=ind+1
        }
        else if (this.props.newCharts[key].style ==='victory') {
          this.vicArr[vic] = this.props.newCharts[key]
          vic=vic+1
        }
      }
  }

  componentWillReceiveProps(newProps) {
    if (newProps !== this.props) {
      this.props = newProps
      var ind = 0;
      var vic=0;
      console.log("newstuff");
      console.log(this.props.newCharts);
      for (var key in this.props.newCharts) {
        if (this.props.newCharts[key].style === 'recharts') {
          this.rechartsArr[ind] = this.props.newCharts[key]
          ind = ind + 1
        }
        else if (this.props.newCharts[key].style ==='victory') {
          this.vicArr[vic] = this.props.newCharts[key]
          vic=vic+1
        }
      }
    }
  }
  
  componentDidMount(){
    console.log("mounted");
  }

  render(){
    return(
      <div>{
          this.rechartsArr.map(function(chart, index){
          // Adding each chart from passed in data. 
          return <Recharts key={index} charts={chart} />;
        })
      }
      {this.vicArr.map(function(chart,index){
        return <Vic key={index} charts={chart} />;
      })}
      </div>
    )
}
}