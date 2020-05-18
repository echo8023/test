import React from "react";
import "./App.css";
import { Counter } from "./components";

import { createStore } from "redux";
import countReducer from "./reducers/countReducer";
import { Provider } from "react-redux";

function App() {

  return (
    <Provider store={createStore(countReducer)}>
      <div>
        <Counter />
      </div>
    </Provider>
  );
}

export default App;

// // 创建 Redux store 来存放应用的状态。
// // API 是 { subscribe, dispatch, getState }。
// let store=createStore(counter);

// // 订阅更新
// store.subscribe(()=>{
//   console.log(store.getState())
// })

// // 改变内部 state 惟一方法是 dispatch 一个 action。
// // action 可以被序列化，用日记记录和储存下来，后期还可以以回放的方式执行
// store.dispatch({ type: 'INCREMENT' });
// // 1
// store.dispatch({ type: 'INCREMENT' });
// // 2
// store.dispatch({ type: 'DECREMENT' });
// //3
