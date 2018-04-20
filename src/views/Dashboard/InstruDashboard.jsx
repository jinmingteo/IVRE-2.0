//for instructor

import React, { Component } from "react";
import ChartistGraph from "react-chartist";
import { Grid, Row, Col } from "react-bootstrap";
import { connect } from 'react-redux';
import { Card } from "components/Card/Card.jsx";
import { StatsCard } from "components/StatsCard/StatsCard.jsx";
import { Tasks } from "components/Tasks/Tasks.jsx";
import {
  dataPie,
  legendPie,
  dataSales,
  optionsSales,
  responsiveSales,
  legendSales,
  dataBar,
  optionsBar,
  responsiveBar,
  legendBar
} from "variables/Variables.jsx";

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

const mapStateToProps = state => {
  return {newCharts: state.instVal};
}

class InstruDashboard extends Component {
  createLegend(json) {
    var legend = [];
    for (var i = 0; i < json["names"].length; i++) {
      var type = "fa fa-circle text-" + json["types"][i];
      legend.push(<i className={type} key={i} />);
      legend.push(" ");
      legend.push(json["names"][i]);
    }
    return legend;
  }

  constructor(props) {
      super(props);
      this.state = this.props
      this.rechartsArr = [];
      //console.log(props.newCharts);
      this.line1title = "title";
      this.line1xaxis = "x-axis";
      this.line1yaxis = "y-axis";
      this.line1data = {x: "no data", y: 0}

      this.bar1title = "title";
      this.bar1xaxis = "x-axis";
      this.bar1yaxis = "y-axis";
      this.bar1data = {x: "no data", y: 0}

      this.bar2title = "title";
      this.bar2xaxis = "x-axis";
      this.bar2yaxis = "y-axis";
      this.bar2data = {x: "no data", y: 0}

      this.bar3title = "title";
      this.bar3xaxis = "x-axis";
      this.bar3yaxis = "y-axis";
      this.bar3data = {x: "no data", y: 0}

      this.bar4title = "title";
      this.bar4xaxis = "x-axis";
      this.bar4yaxis = "y-axis";
      this.bar4data = {x: "no data", y: 0}
      
      // this.
      // this.title1 = "title";

  }
  
  componentWillReceiveProps(newProps) {
    if (newProps !== this.props) {
      this.props = newProps
      console.log("newstuff");
      console.log(this.props.newCharts);
      for (var key in this.props.newCharts) {
          if (key == "Cat"){
            this.pri = this.props.newCharts[key].pri;
            this.sec = this.props.newCharts[key].sec;
            this.ter = this.props.newCharts[key].ter;
          }
          if (key == "Pie1"){
            this.pie1title = this.props.newCharts[key].title;
            this.pie1xaxis = this.props.newCharts[key].xaxisLabel;
            this.pie1yaxis = this.props.newCharts[key].yaxisLabel;
            this.pie1data = this.props.newCharts[key].data;
          }
          if (key == "Bar1"){
            this.bar1title = this.props.newCharts[key].title;
            this.bar1xaxis = this.props.newCharts[key].xaxisLabel;
            this.bar1yaxis = this.props.newCharts[key].yaxisLabel;
            this.bar1data = this.props.newCharts[key].data;
            //console.log(this.bar2data);
          }
          if (key == "Bar2"){
            this.bar2title = this.props.newCharts[key].title;
            this.bar2xaxis = this.props.newCharts[key].xaxisLabel;
            this.bar2yaxis = this.props.newCharts[key].yaxisLabel;
            this.bar2data = this.props.newCharts[key].data;
            //console.log(this.bar2data);
          }
          if (key == "Bar3"){
            this.bar3title = this.props.newCharts[key].title;
            this.bar3xaxis = this.props.newCharts[key].xaxisLabel;
            this.bar3yaxis = this.props.newCharts[key].yaxisLabel;
            this.bar3data = this.props.newCharts[key].data;
          }
          if (key == "Bar4"){
            this.bar4title = this.props.newCharts[key].title;
            this.bar4xaxis = this.props.newCharts[key].xaxisLabel;
            this.bar4yaxis = this.props.newCharts[key].yaxisLabel;
            this.bar4data = this.props.newCharts[key].data;
          }
          if (key == "Line1"){
            this.line1title = this.props.newCharts[key].title;
            this.line1xaxis = this.props.newCharts[key].xaxisLabel;
            this.line1yaxis = this.props.newCharts[key].yaxisLabel;
            this.line1data = this.props.newCharts[key].data;
          }

      }
    }
  }

  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                //id="chartActivity"
                title={this.bar1title}
                //category="All products including Taxes"
                stats="Updated Recently"
                statsIcon="fa fa-check"
                content={
                  <div className="ct-chart">
                      <BarChart
                      width={900}
                      height={300}
                      data={this.bar1data}
                      margin={{ top: 5, right: 40, left: 0, bottom: 40 }}
                    >
                      <XAxis
                        dataKey="x"
                        // label={
                        //   <AxisLabel axisType="xAxis" width={400} height={300}>
                        //     {this.bar1xaxis}
                        //   </AxisLabel>
                        // }
                      />
                      <YAxis
                        dataKey="y"
                        label={
                          <AxisLabel axisType="yAxis" width={400} height={300}>
                            {this.bar1yaxis}
                          </AxisLabel>
                        }
                      />
                      <CartesianGrid strokeDasharray="3 3" />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="y" fill="#8884d8" />
                    </BarChart>
                  </div>
                }
              />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Card
                statsIcon="fa fa-history"
                //id="chartHours"
                title= {this.bar2title}
                //category="24 Hours performance"
                stats="Updated recently"
                content={
                  <div className="ct-chart">
                      <BarChart
                      width={400}
                      height={300}
                      data={this.bar2data}
                      margin={{ top: 5, right: 40, left: 0, bottom: 40 }}
                    >
                      <XAxis
                        dataKey="x"
                        // label={
                        //   <AxisLabel axisType="xAxis" width={400} height={300}>
                        //     {this.bar2xaxis}
                        //   </AxisLabel>
                        // }
                      />
                      <YAxis
                        dataKey="y"
                        label={
                          <AxisLabel axisType="yAxis" width={400} height={300}>
                            {this.bar2yaxis}
                          </AxisLabel>
                        }
                      />
                      <CartesianGrid strokeDasharray="3 3" />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="y" fill="#8884d8" />
                    </BarChart>
                  </div>
                }
              />
            </Col>
            <Col md={6}>
              <Card
                statsIcon="fa fa-history"
                //id="chartHours"
                title= {this.bar3title}
                //category="24 Hours performance"
                stats="Updated recently"
                content={
                  <div className="ct-chart">
                      <BarChart
                      width={400}
                      height={300}
                      data={this.bar3data}
                      margin={{ top: 5, right: 40, left: 0, bottom: 40 }}
                    >
                      <XAxis
                        dataKey="x"
                        // label={
                        //   <AxisLabel axisType="xAxis" width={400} height={300}>
                        //     {this.bar3xaxis}
                        //   </AxisLabel>
                        // }
                      />
                      <YAxis
                        dataKey="y"
                        label={
                          <AxisLabel axisType="yAxis" width={400} height={300}>
                            {this.bar3yaxis}
                          </AxisLabel>
                        }
                      />
                      <CartesianGrid strokeDasharray="3 3" />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="y" fill="#8884d8" />
                    </BarChart>
                  </div>
                }
              />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Card
                //id="chartActivity"
                title={this.bar4title}
                //category="All products including Taxes"
                stats="Updated Recently"
                statsIcon="fa fa-check"
                content={
                  <div className="ct-chart">
                      <BarChart
                      width={400}
                      height={300}
                      data={this.bar4data}
                      margin={{ top: 5, right: 40, left: 0, bottom: 40 }}
                    >
                      <XAxis
                        dataKey="x"
                        // label={
                        //   <AxisLabel axisType="xAxis" width={400} height={300}>
                        //     {this.bar4xaxis}
                        //   </AxisLabel>
                        // }
                      />
                      <YAxis
                        dataKey="y"
                        label={
                          <AxisLabel axisType="yAxis" width={400} height={300}>
                            {this.bar4yaxis}
                          </AxisLabel>
                        }
                      />
                      <CartesianGrid strokeDasharray="3 3" />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="y" fill="#8884d8" />
                    </BarChart>
                  </div>
                }
              />
            </Col>
            <Col md={6}>
              <Card
                //id="chartActivity"
                title={this.line1title}
                //category="All products including Taxes"
                stats="Updated Recently"
                statsIcon="fa fa-check"
                content={
                  <div className="ct-chart">
                      <LineChart width={400} height={300} data={this.line1data}
                      margin={{ top: 5, right: 40, left: 0, bottom: 40 }}>
                        <Line type="monotone" dataKey="y" stroke="#8884d8" />
                        <XAxis
                          dataKey="x"
                          // label={
                          //   <AxisLabel axisType="xAxis" width={400} height={300}>
                          //     {this.line1xaxis}
                          //   </AxisLabel>
                          // }
                        />
                        <YAxis
                          label={
                            <AxisLabel axisType="yAxis" width={400} height={330}>
                              {this.line1yaxis}
                            </AxisLabel>
                          }
                        />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Legend />
                      </LineChart>
                  </div>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default connect(mapStateToProps)(InstruDashboard);
