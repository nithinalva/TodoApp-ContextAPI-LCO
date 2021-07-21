import React,{useContext, useState} from 'react'
import { FormGroup,Input,InputGroup,Form,InputGroupAddon,Button } from 'reactstrap'
import TodoContext from '../context/TodoContext'
import { v4 } from 'uuid';
import { ADD_TODO } from '../context/actions/action.types';

const TodoForms = () => {
    const [Todo, setTodo] = useState("")
    const {dispatch}=useContext(TodoContext)

    const submitHandler=e=>{
        e.preventDefault()
        if(Todo==""){
            return alert("please enter a valid input")
        }
        const todo={
            Todo,
            id:v4(),
            status:false
           
        }
        
        dispatch({
            type:ADD_TODO,
            payload:todo,
           

        })
        setTodo("")
    }
    return (
        <Form onSubmit={submitHandler}>
            <FormGroup>
                <InputGroup>
               
                <Input type="text" name="todo" id="todo" placeholder="Your next todo" value={Todo}
                onChange={e=>setTodo(e.target.value)}/>
                <InputGroupAddon addonType="prepend"/>
                <Button color="primary">ADD</Button>
                </InputGroup>
            </FormGroup>
        </Form>

    )
}

export default TodoForms
