import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import styles from "./index.module.css";
import logo from "./logo192.png";

const name = "React";
const obj = {
  fistName: "Harry",
  lastName: "Potter"
};
function formatName(name) {
  return name.fistName + " " + name.lastName;
}
const greet = <div>good</div>;
const show = true;
const a = [0, 1, 2];
const jsx = (
  <div className={styles.app}>
    <div>hello, {name}</div>
    <div>{formatName(obj)}</div>
    {greet}
    {show ? greet : "登录"}
    {show && greet}
    <ul>
      {/* diff时候，首先比较type，然后是key，所以同级同类型元素，key值必须得 唯一 */}
      {a.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ul>
    <img
      src={logo}
      // className="logo"
      className={styles.logo}
      style={{ width: "50px", height: "30px" }}
    />
  </div>
);

ReactDOM.render(jsx, document.getElementById("root"));

//基本使用 表达式用{}包裹
//函数
//JSX对象
//条件语句
//数组
//属性
//模块化
