import { ADD_TODO,REMOVE_TODO,DONE } from "../actions/action.types";

export const TodoReducer=(state,action)=>{

    switch(action.type){
        case ADD_TODO:
            return [...state,action.payload]
          

        case REMOVE_TODO:
            return state.filter((todo)=>todo.id!==action.payload)
        
     case DONE:
                const index = state.findIndex(todo => todo.id==action.payload)
                const newArray = [...state]
        // console.log(newArray[index]);
                    newArray[index].status=true
                    return newArray

       
            
        default:
            return state;
    }
}