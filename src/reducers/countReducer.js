// reducer
// 接收现在的 state，和一个 action，返回经过改变后的新的 state。
import actionType from '../action/actionType';

let initState = {
  count: 0
}

export default function countReducer(state=initState, action) {
  // const {count} = state;
  switch (action.type) {
    case actionType.INCREMENT:
      return {
        ...state,
        count: state.count + action.payload.num
      }
    case actionType.DECREMENT:
      return {
        ...state,
        count: state.count - action.payload.num
      }
    default:
      return state;
  }
}