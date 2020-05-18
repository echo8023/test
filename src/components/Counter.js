import React, { PureComponent } from "react";
import {connect} from 'react-redux';
import { doIncrement, doDecrement} from '../action/countAction'


class Counter extends PureComponent {
  
  // onDecrement(){
  //   this.props.store.dispatch(DECREMENT)
  // }

  // onIncrement(){
  //   this.props.dispatch(INCREMENT)
  // }

  // onReset(){
  //   this.props.dispatch(RESET)
  // }

  render() {
    return (
      <div>
        <button onClick={this.props.doDecrement.bind(this, 2)}>-</button>
        {this.props.count}
        <button onClick={this.props.doIncrement.bind(this, 1)}>+</button>
        {/* <button onClick={this.props.onReset}>重置</button> */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count,
  }
}


export default connect(mapStateToProps, {doDecrement, doIncrement})(Counter);
