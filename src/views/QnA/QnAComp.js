import React, { Component } from "react";
import { Treemap, Tooltip} from "recharts";
import { Grid, Row, Col } from "react-bootstrap";
import { Card } from "components/Card/Card.jsx";

const COLORS = ['#8889DD', '#9597E4', '#8DC77B', '#A5D297', '#E2CF45', '#F8C12D'];

class CustomizedContent extends Component{
  render() {
    const { root, depth, x, y, width, height, index, payload, colors, rank, name } = this.props;

    return (
      <g>
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          style={{
            fill: depth < 2 ? colors[Math.floor(index % 6)] : 'none',
            stroke: '#fff',
            strokeWidth: 2 / (depth + 1e-10),
            strokeOpacity: 1 / (depth + 1e-10),
          }}
        />
        {
          depth === 1 ?
          <text
            x={x + width / 2}
            y={y + height / 2 + 7}
            textAnchor="middle"
            fill="#fff"
            fontSize={14}
          >
            {name}
          </text>
          : null
        }
        {
          depth === 1 ?
          <text
            x={x + 4}
            y={y + 18}
            fill="#fff"
            fontSize={16}
            fillOpacity={0.9}
          >
            {index + 1}
          </text>
          : null
        }
      </g>
    );
  }
};


export default class QuestionAnswer extends React.Component {
  render() {
    console.log("Props within Recharts:");
    console.log(this.props);
      return (
        <Row>
            <Col md={12}>
              <Card
                //id="chartActivity"
                title={this.props.charts.title}
                //category="All products including Taxes"
                stats="Updated Recently"
                statsIcon="fa fa-check"
                content={
                  <div className="ct-chart">
                      <Treemap width={900} height={250} data={this.props.charts.data}
                        dataKey="size"
                        ratio={4 / 3}
                        stroke="#fff"
                        fill="#8884d8"
                        content={<CustomizedContent colors={COLORS}/>}
                      >
                      <Tooltip/>
                      </Treemap>
                  </div>
                }
              />
            </Col>
          </Row>
      );
      }
    }


