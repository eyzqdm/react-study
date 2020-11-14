import React from 'react';
import {connect} from "react-redux";
import Li from './li';
function Todos(props){
  let {state,dispatch} = props; 
  return (<ul id="todo-list">
        {state.map(item=><Li data={item} key={item.id} dispatch={dispatch} />)}
    </ul>)
}

export default connect((state)=>{
    return {state}
})(Todos);
