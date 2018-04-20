//for QnA

import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import { connect } from 'react-redux';
import { Card } from "components/Card/Card.jsx";
import { StatsCard } from "components/StatsCard/StatsCard.jsx";
import { Treemap, Tooltip} from "recharts";
import QuestionAnswer from './QnAComp.js'

const mapStateToProps = state => {
  return {newCharts: state.ansVal};
}

class AnswerMap extends Component {
  
  constructor(props) {
      super(props);
      //this.state = this.props
      this.rechartsArr = [];

      var ind=0;

      for(var key in props.newCharts){
        if (this.props.newCharts[key].style ==='recharts'){
          this.rechartsArr[ind]=this.props.newCharts[key]
          ind=ind+1
        }
      }
  }
  componentWillReceiveProps(newProps) {
    if (newProps !== this.props) {
      this.props = newProps
      var ind = 0;
      var vic=0;
      console.log("newstuff");
      //console.log(this.props.newCharts);
      for (var key in this.props.newCharts) {
        if (this.props.newCharts[key].style ==='recharts'){
          this.rechartsArr[ind]=this.props.newCharts[key]
          ind=ind+1
        }
      }
    }
  }

  render() {
    return (
      <div className="content">
        <Grid fluid>
            {
                this.rechartsArr.map(function(chart, index){
                // Adding each chart from passed in data. 
                return <QuestionAnswer key={index} charts={chart} />;
              })
            }

        </Grid>
      </div>
    );
  }
}

export default connect(mapStateToProps)(AnswerMap);
