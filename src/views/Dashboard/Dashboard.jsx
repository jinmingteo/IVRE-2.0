//for Admin

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
  return {newCharts: state.adminVal};
}

class Dashboard extends Component {
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
      this.pri = 0;
      this.sec = 0;
      this.ter = 0;

      this.pie1title = "title";
      this.pie1xaxis = "x-axis";
      this.pie1yaxis = "y-axis";
      this.pie1data = {x: "no data", y: 0}
      
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
      
      this.bar5title = "title";
      this.bar5xaxis = "x-axis";
      this.bar5yaxis = "y-axis";
      this.bar5data = {x: "no data", y: 0}
      // this.
      // this.title1 = "title";
      this.bar6title = "title";
      this.bar6xaxis = "x-axis";
      this.bar6yaxis = "y-axis";
      this.bar6data = {x: "no data", y: 0}

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
            //console.log(this.pie1data)
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
          if (key == "Bar5"){
            this.bar5title = this.props.newCharts[key].title;
            this.bar5xaxis = this.props.newCharts[key].xaxisLabel;
            this.bar5yaxis = this.props.newCharts[key].yaxisLabel;
            this.bar5data = this.props.newCharts[key].data;
          }
          if (key == "Bar6"){
            this.bar6title = this.props.newCharts[key].title;
            this.bar6xaxis = this.props.newCharts[key].xaxisLabel;
            this.bar6yaxis = this.props.newCharts[key].yaxisLabel;
            this.bar6data = this.props.newCharts[key].data;
          }
      }
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
            //console.log(this.pie1data)
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
          if (key == "Bar5"){
            this.bar5title = this.props.newCharts[key].title;
            this.bar5xaxis = this.props.newCharts[key].xaxisLabel;
            this.bar5yaxis = this.props.newCharts[key].yaxisLabel;
            this.bar5data = this.props.newCharts[key].data;
          }
          if (key == "Bar6"){
            this.bar6title = this.props.newCharts[key].title;
            this.bar6xaxis = this.props.newCharts[key].xaxisLabel;
            this.bar6yaxis = this.props.newCharts[key].yaxisLabel;
            this.bar6data = this.props.newCharts[key].data;
          }
      }
    }
  }

  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col lg={4} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-culture" />}
                statsText="Primary School"
                statsValue= {this.pri}
                //statsIcon={<i className="fa fa-refresh" />}
                //statsIconText="Updated now"
              />
            </Col>
            <Col lg={4} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-culture" />}
                statsText="Secondary School"
                statsValue={this.sec}
                //statsIcon={<i className="fa fa-calendar-o" />}
                //statsIconText="Last day"
              />
            </Col>
            <Col lg={4} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-culture" />}
                statsText="Tertiary School"
                statsValue={this.ter}
                //statsIcon={<i className="fa fa-clock-o" />}
                //statsIconText="In the last hour"
              />
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <Card
                statsIcon="fa fa-history"
                //id="chartHours"
                title= {this.bar1title}
                //category="24 Hours performance"
                stats="Updated recently"
                content={
                  <div className="ct-chart">
                      <BarChart
                      width={300}
                      height={300}
                      data={this.bar1data}
                      margin={{ top: 0, right: 40, left: 0, bottom: 40 }}
                      >
                      <XAxis
                        dataKey="x"
                        label={
                          <AxisLabel axisType="xAxis" width={300} height={270}>
                            {this.bar1xaxis}
                          </AxisLabel>
                        }
                      />
                      <YAxis
                        dataKey="y"
                        // label={
                        //   <AxisLabel axisType="yAxis" width={400} height={300}>
                        //     {this.bar1yaxis}
                        //   </AxisLabel>
                        // }
                      />
                      <CartesianGrid strokeDasharray="3 3" />
                      <Tooltip />
                      <Legend verticalAlign="bottom" align="right"/>
                      <Bar dataKey="y" fill="#8884d8" />
                    </BarChart>
                  </div>
                }
              />
            </Col>
            <Col md={4}>
              <Card
                statsIcon="fa fa-history"
                //id="chartHours"
                title= {this.bar2title}
                //category="24 Hours performance"
                stats="Updated recently"
                content={
                  <div className="ct-chart">
                      <BarChart
                      width={300}
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
                      <Legend verticalAlign="bottom" align="right"/>
                      <Bar dataKey="y" fill="#8884d8" />
                    </BarChart>
                  </div>
                }
              />
            </Col>
            <Col md={4}>
              <Card
                statsIcon="fa fa-history"
                //id="chartHours"
                title= {this.bar3title}
                //category="24 Hours performance"
                stats="Updated recently"
                content={
                  <div className="ct-chart">
                      <BarChart
                      width={300}
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
                      <Legend verticalAlign="bottom" align="right"/>
                      <Bar dataKey="y" fill="#8884d8" />
                    </BarChart>
                  </div>
                }
              />
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <Card
                //id="chartActivity"
                title={this.pie1title}
                //category="All products including Taxes"
                stats="Updated Recently"
                statsIcon="fa fa-check"
                content={
                  <div class="center-div">
                  <PieChart width={800} height={400}>
                    <Pie
                      data={this.pie1data}
                      cx={280}
                      cy={190}
                      outerRadius={160}
                      fill="#82ca9d"
                      label
                    />

                    <Tooltip />
                  </PieChart>
                    
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
                title={this.bar5title}
                //category="All products including Taxes"
                stats="Updated Recently"
                statsIcon="fa fa-check"
                content={
                  <div className="ct-chart">
                      <BarChart
                      width={400}
                      height={300}
                      data={this.bar5data}
                      margin={{ top: 5, right: 40, left: 0, bottom: 40 }}
                      >
                      <XAxis
                        dataKey="x"
                        // label={
                        //   <AxisLabel axisType="xAxis" width={400} height={300}>
                        //     {this.bar5xaxis}
                        //   </AxisLabel>
                        // }
                      />
                      <YAxis
                        dataKey="y"
                        label={
                          <AxisLabel axisType="yAxis" width={400} height={300}>
                            {this.bar5yaxis}
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
            <Col md={12}>
              <Card
                //id="chartActivity"
                title={this.bar6title}
                //category="All products including Taxes"
                stats="Updated Recently"
                statsIcon="fa fa-check"
                content={
                  <div className="ct-chart">
                      <BarChart
                      width={900}
                      height={300}
                      data={this.bar6data}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <XAxis
                        dataKey="x"
                        // label={
                        //   <AxisLabel axisType="xAxis" width={400} height={300}>
                        //     {this.bar6xaxis}
                        //   </AxisLabel>
                        // }
                      />
                      <YAxis
                        dataKey="y"
                        label={
                          <AxisLabel axisType="yAxis" width={400} height={300}>
                            {this.bar6yaxis}
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
        </Grid>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Dashboard);
