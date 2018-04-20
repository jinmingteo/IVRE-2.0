//for Student

import React, { Component } from "react";
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


const mapStateToProps = state => {
  return {newCharts: state.stuVal};
}

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
      //this.state = this.props
      //console.log(props.newCharts);
      this.stuname = "name";
      this.stulevel = 0;
      this.rank = 0;

      this.line1title = "title";
      this.line1xaxis = "x-axis";
      this.line1yaxis = "y-axis";
      this.line1data = [];
      for (var key in this.props.newCharts) {
          if (key === "Line1"){
            this.line1title = this.props.newCharts[key].title;
            this.line1xaxis = this.props.newCharts[key].xaxisLabel;
            this.line1yaxis = this.props.newCharts[key].yaxisLabel;
            this.line1data = this.props.newCharts[key].data;
          }
          if (key === "Cat"){
            this.stuname = this.props.newCharts[key].name;
            this.stulevel = this.props.newCharts[key].levels;
            this.rank = this.props.newCharts[key].rank;
          }
          if (key === "photo"){
            this.photo = this.props.newCharts[key][this.stuname];
            //console.log(this.photo)
          }
      }
  }
  
  componentWillReceiveProps(newProps) {
    if (newProps !== this.props) {
      this.props = newProps
      console.log("newstuff");
      console.log(this.props.newCharts);
      for (var key in this.props.newCharts) {
          if (key === "Line1"){
            this.line1title = this.props.newCharts[key].title;
            this.line1xaxis = this.props.newCharts[key].xaxisLabel;
            this.line1yaxis = this.props.newCharts[key].yaxisLabel;
            this.line1data = this.props.newCharts[key].data;
          }
          if (key === "Cat"){
            this.stuname = this.props.newCharts[key].name;
            this.stulevel = this.props.newCharts[key].levels;
            this.rank = this.props.newCharts[key].rank;
          }
          if (key === "photo"){
            this.photo = this.props.newCharts[key][this.stuname];
            //console.log(this.photo)
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
                bigIcon={<img src={this.photo} />}
                statsText="Name"
                statsValue= {this.stuname}
                //statsIcon={<i className="fa fa-refresh" />}
                //statsIconText="Updated now"
              />
            </Col>
            <Col lg={4} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-cup" />}
                statsText="Level"
                statsValue={this.stulevel}
                //statsIcon={<i className="fa fa-calendar-o" />}
                //statsIconText="Last day"
              />
            </Col>
            <Col lg={4} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-medal" />}
                statsText="Rank"
                statsValue={this.rank}
                //statsIcon={<i className="fa fa-clock-o" />}
                //statsIconText="In the last hour"
              />
            </Col>
          </Row>
          <Row>
           <Col md={12}>
              <Card
                //id="chartActivity"
                title={this.line1title}
                //category="All products including Taxes"
                stats="Updated Recently"
                statsIcon="fa fa-check"
                content={
                  <div className="ct-chart">
                      <LineChart width={900} height={300} data={this.line1data}>
                        <Line type="monotone" dataKey="Average playtime in the course" stroke="#8884d8" />
                        <Line type="monotone" dataKey="Time I spent" stroke="#82ca9d" />
                        <XAxis
                          dataKey="x"
                          label={
                            <AxisLabel axisType="xAxis" width={400} height={300}>
                              {this.line1xaxis}
                            </AxisLabel>
                          }
                        />
                        <YAxis
                          label={
                            <AxisLabel axisType="yAxis" width={400} height={300}>
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

export default connect(mapStateToProps)(Dashboard);
