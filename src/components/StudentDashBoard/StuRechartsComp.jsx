import React from "react";
//import { render } from "react-dom";
import AppFrame from "./AppFrame";
//import Dashboard from "react-dazzle";
import {
  PieChart,
  Pie,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import { BarChart, Bar } from "recharts";
//import Victory from './Victory';
//import { compose } from "redux";
//import { connect } from "react-redux";

const AxisLabel = ({
  axisType,
  x = 0,
  y = 0,
  width,
  height,
  stroke,
  children
}) => {
  const isVert = axisType === "yAxis";
  const cx = isVert ? x + 20 : x + width / 2;
  const cy = isVert ? height / 2 + y : y + height;
  const rot = isVert ? `270 ${cx} ${cy}` : 0;
  return (
    <text
      x={cx}
      y={cy}
      transform={`rotate(${rot})`}
      textAnchor="middle"
      stroke={stroke}
    >
      {children}
    </text>
  );
};

class StuRechartsComp extends React.Component {
  render() {
    console.log("Props within Recharts:");
    console.log(this.props);
    if (this.props.charts.chartType === "line") {
      return (
        <AppFrame>
          <h1> Hello, 18Y3J QIANG JIAYUAN </h1>
          <h2> You have completed 368 levels. </h2>
          <h2> Your current rank is 2! </h2>
          <h3>{this.props.charts.title}</h3>
          <LineChart width={400} height={400} data={this.props.charts.data}>
            <Line type="monotone" dataKey="y" stroke="#8884d8" />
            <XAxis
              dataKey="x"
              label={
                <AxisLabel axisType="xAxis" width={400} height={400}>
                  {this.props.charts.xaxisLabel}
                </AxisLabel>
              }
            />
            <YAxis
              label={
                <AxisLabel axisType="yAxis" width={400} height={400}>
                  {this.props.charts.yaxisLabel}
                </AxisLabel>
              }
            />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
          </LineChart>
        </AppFrame>
      );
    }
    if (this.props.charts.chartType === "pie") {
      return (
        <AppFrame>
          <h3>{this.props.charts.title}</h3>
          <PieChart width={800} height={400}>
            <Pie
              isAnimationActive={false}
              data={this.props.charts.data}
              cx={200}
              cy={200}
              outerRadius={90}
              fill="#82ca9d"
              label
            />
            <Tooltip />
          </PieChart>
        </AppFrame>
      );
    }

    if (this.props.charts.chartType === "bar") {
      return (
        <AppFrame>
          <h3>{this.props.charts.title}</h3>
          <BarChart
            width={600}
            height={300}
            data={this.props.charts.data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis
              dataKey="x"
              label={
                <AxisLabel axisType="xAxis" width={600} height={300}>
                  {this.props.charts.xaxisLabel}
                </AxisLabel>
              }
            />
            <YAxis
              dataKey="y"
              label={
                <AxisLabel axisType="yAxis" width={600} height={300}>
                  {this.props.charts.yaxisLabel}
                </AxisLabel>
              }
            />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Bar dataKey="y" fill="#8884d8" />
          </BarChart>
        </AppFrame>
      );
    }
    // return(
    //  <AppFrame >
    //  <LineChart width={400} height={400} data={this.props.charts.data}>
    //    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    //    <XAxis dataKey="name"/>
    //    <YAxis/>
    //    <CartesianGrid strokeDasharray="3 3"/>
    //    <Tooltip/>
    //    <Legend />

    //    </LineChart>

    //     <PieChart width={800} height={400}>
    //     <Pie data={this.props.charts.data02} cx={200} cy={200} innerRadius={70} outerRadius={90} fill="#82ca9d" label/>
    //     </PieChart>

    //   </AppFrame>
    // );
  }
}

// const mapStateToProps = state => {
//     return {charts : state.val}
// }

// const mapDispatchToProps = dispatch => {}

// const Recharts = connect(
//     mapStateToProps,
// )(RechartsComp)

export default StuRechartsComp;
