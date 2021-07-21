import React, { useContext } from 'react'
import { ListGroup,ListGroupItem } from 'reactstrap';
import TodoContext from '../context/TodoContext';
import {FaCheckDouble} from 'react-icons/fa'
import { REMOVE_TODO,DONE } from '../context/actions/action.types';
import  {AiOutlineDelete} from 'react-icons/ai'
const Todos = () => {
    const{todo,dispatch}=useContext(TodoContext)
    return (
        <div>
            <ListGroup className="mt-3 mb-2 items">
                {todo.map((todo,index)=>(
                    <ListGroupItem title={todo.Todo} key={todo.id} className="rounded-top mt-1">
                      <p> <del className={todo.status?`d`:`d-none`}>{todo.Todo}</del> </p>
                        <p className={todo.status?`d-none`:`d`}>{todo.Todo}  </p> 


                        <span style={{cursor:"pointer"}} onClick={()=>{
                            dispatch({
                                type:REMOVE_TODO,
                                payload:todo.id
                            })
                        //   {console.log(todo.status)}
                          
                        }}>
                     
                   DELETE<AiOutlineDelete/>
                        </span>
                          

                        <span style={{marginRight:"2rem",cursor:"pointer"}}  onClick={()=>{
                            dispatch({
                                type:DONE,
                                payload:todo.id
                            })
                        //   {console.log(todo.status)}
                          
                        }}>
                         DONE
                       <FaCheckDouble style={{}}/>
                        </span>
                      
                        </ListGroupItem>
                ))}
            </ListGroup>
        </div>
    )
}

export default Todos
