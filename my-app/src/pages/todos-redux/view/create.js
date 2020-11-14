import React from 'react';
import {connect} from "react-redux";
function Create(props){
    let {dispatch} = props;
    //let [val,setVal] = useState("");
    return (<div id="create-todo">
    <input 
      id="new-todo" 
      placeholder="What needs to be done?" 
      autoComplete="off"
      type="text"
      defaultValue=''
      // onChange={({target})=>{
      //   setVal(target.value);
      // }}
      onKeyDown = {(e)=>{
          if(e.keyCode == 13){
             // console.log(e.target.value);
             dispatch({
                type: "ADD",
                val: e.target.value
             });
             e.target.value = "";
          }
      }}
    />
</div>);
}
export default connect()(Create);
