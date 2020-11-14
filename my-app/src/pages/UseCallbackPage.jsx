import React, { useState, useEffect, PureComponent, useCallback } from "react";

export default function UseCallbackPage(props) {
  const [count, setCount] = useState(0);

  const addClick = useCallback(() => {
    let sum = 0;
    for (let i = 0; i < count; i++) {
      sum += i;
    }
    return sum;
  }, [count]);
  const [value, setValue] = useState("");

  return (
    <div>
      <h3>UseCallbackPage</h3>
      <p>count: {count}</p>
      <button onClick={() => setCount(count + 1)}>add</button>
      <input value={value} onChange={event => setValue(event.target.value)} />
      <Child addClick={addClick} />
    </div>
  );
}

class Child extends PureComponent {
  render() {
    console.log("child render");
    const { addClick } = this.props;
    return (
      <div>
        <h3>Child</h3>
        <button onClick={() => console.log(addClick())}>add</button>
      </div>
    );
  }
}
/* useMemog和useCallback的区别
useMemo 计算结果是 return 回来的值, 主要用于缓存计算结果的值，应用场景如：需要计算的状态
useCallback 计算结果是 函数, 主要用于 缓存函数，应用场景如: 需要缓存的函数，
因为函数式组件每次任何一个 state 的变化 整个组件 都会被重新刷新，一些函数是没有必要被重新刷新的，此时就应该缓存起来，提高性能，和减少资源浪费。
 */