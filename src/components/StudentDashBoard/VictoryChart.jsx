import React from 'react';
//import * as V from 'victory';
import { VictoryChart, VictoryBar, VictoryTheme, VictoryAxis, VictoryStack, VictoryLine, VictoryPie } from 'victory';
//import {range} from 'react-math';
import AppFrame from './AppFrame'
//import {compose} from 'redux'
//import {connect} from 'react-redux'


class VictoryComp extends React.Component {
  render() {
  console.log(this.props)
    if(this.props.charts.chartType ==='line'){
      return (
        <div>
        <AppFrame>
            <h3>
              {this.props.charts.title}
            </h3>
        <VictoryChart theme={VictoryTheme.material}>
          <VictoryLine 
          style={{
              data: { stroke: "#c43a31" },
              parent: { border: "1px solid #ccc" }
            }}
            data={this.props.charts.data}/>
        </VictoryChart>
        </AppFrame>
        </div>
      )
    }
    
    if(this.props.charts.chartType==='pie'){
      return(
        <div>
        <AppFrame>
            <h3>
              {this.props.charts.title}
            </h3>
            <VictoryPie
              data={this.props.charts.data}/>
        </AppFrame>
        </div>
      )
    }

    if (this.props.charts.chartType === 'bar') {
      return (
        <div>
          <AppFrame>
            <h3>
              {this.props.charts.title}
            </h3>
            <VictoryChart
              theme={VictoryTheme.material}
              domainPadding={10}
            >
              <VictoryBar
                style={{ data: { fill: "#c43a31" } }}
                data={this.props.charts.data}
              />
            </VictoryChart> 
          </AppFrame>
        </div>
      )
    }


    

      // console.log('props.data')
      // console.log(this.props)
        return (
        <div>  
        <AppFrame>
        <VictoryChart
        domainPadding={20}
        theme={VictoryTheme.material}
        >
        <VictoryAxis
        tickValues={[1, 2, 3, 4]}
        tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
        />
        <VictoryAxis
        dependentAxis
        tickFormat={(x) => (`$${x / 1000}k`)}
        />
        <VictoryStack>
        <VictoryBar
        data={data2012}
        x="quarter"
        y="earnings"
        />
        <VictoryBar
        data={data2013}
        x="quarter"
        y="earnings"
        />
        <VictoryBar
        data={data2014}
        x="quarter"
        y="earnings"
        />
        <VictoryBar
        data={data2015}
        x="quarter"
        y="earnings"
        />
        </VictoryStack>
        </VictoryChart>
    </AppFrame>
    </div>
    )
    }
}
    
// const mapStateToProps = state => {
//       return {charts : state.val}
// }

// const mapDispatchToProps = dispatch => {}


// const Victory = connect(
//       mapStateToProps,
// )(VictoryComp)

export default VictoryComp;               