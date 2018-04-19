//import React from 'react';
import { connect } from 'react-redux';
import ChartComponent from './StuChartComponent.jsx'

const mapStateToProps = state => {
  return {newCharts: state.stuVal};
}

//const mapDispatchToProps = dispatch => { }

export default connect(mapStateToProps)(ChartComponent);
