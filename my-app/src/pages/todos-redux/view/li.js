import React,{useState,useRef,useEffect} from 'react';
function Li(props) {
    let {data,dispatch} = props; // dispatch方法不一定要引入connect，也可以从父级传入
    let {id,txt,done} = data;
    const [edit,setEdit] = useState(false);
    const [inputVal,setInputVal] = useState(txt);
    // txt 做了修改了之后，inputVal 会自动和 txt 进行同步
    const input = useRef();
    useEffect(()=>{
        if(edit){
            input.current.focus();
        }
    },[edit]);
    return (
        <li className={edit?"editing":""}>
            <div className={"todo "+ (done?"done":"")}>
                <div className="display">
                    <input 
                        className="check" 
                        type="checkbox"
                        checked = {done}
                        onChange = {({target})=>{
                            dispatch({
                                type: "DONE",
                                id,
                                done: target.checked
                            });
                        }} 
                    />
                    <div 
                        className="todo-content"
                        onDoubleClick={()=>{
                            setEdit(true);
                        }}
                    >{txt}</div>
                    <span 
                        className="todo-destroy"
                        onClick={()=>{
                            dispatch({
                                type: "REMOVE",
                                id
                            });
                        }}
                    ></span>
                </div>
                <div className="edit">
                    <input 
                        className="todo-input" 
                        type="text" 
                        value = {inputVal}
                        ref = {input}
                        onChange={({target})=>{
                            setInputVal(target.value);
                        }}
                        onBlur = {()=>{
                            setEdit(false);
                            if(inputVal.trim()){
                                dispatch({
                                    type:"EDIT",
                                    id,
                                    txt: inputVal
                                });
                            } else {
                                setInputVal(txt);
                            }   
                        }}
                    />
                </div>
            </div>
        </li>)
}

export default Li;
