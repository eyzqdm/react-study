import {createStore} from "redux";
function reducer(state=[],action){
    switch(action.type){
        case "ADD":
            //console.log(action.val);
            state.push({
                id: Date.now(),
                txt: action.val,
                done: false
            })
            return [...state];
        case "DONE":
            state.forEach(item=>{
                if(item.id === action.id){
                    item.done = action.done      
                }
            }) 
            return [...state];
        case "REMOVE":
            return state.filter(item=>(item.id !== action.id));
        case "EDIT":
            state.forEach(item=>{
                if(item.id === action.id){
                    item.txt = action.txt      
                }
            })  
            return  [...state];   
        case "REMOVE_DONE":
            return state.filter(item=>!item.done);          
    }
    return state;
}


const store = createStore(reducer);
export default store;