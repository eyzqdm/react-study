import React from "react";
import "./static/index.css";
import Title from "./view/title";
import Todos from "./view/todos";
import Create from "./view/create";
import State from "./view/state";
import {connect} from "react-redux";
function App(props){
    let {length} = props;
    return (<div id="todoapp">
        <Title />
        <div className="content">
            <Create />
            {length>0?<Todos />:""}
            {length>0?<State />:""}
        </div>
    </div>);
}
export default connect(state=>({
    length:state.length
}))(App);
