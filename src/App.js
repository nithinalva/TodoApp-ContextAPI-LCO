import { useReducer } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoContext from './context/TodoContext';
import { TodoReducer } from './context/reducers/reducer';
import { Container } from 'reactstrap';
import TodoForms from './components/TodoForms';
import Todos from './components/Todos';
// import {TodoContext} from '../src/context/TodoContext'

function App() {
const[todo,dispatch]=useReducer(TodoReducer,[])
  return (
 
      <TodoContext.Provider value={{todo,dispatch}}>
    
      <Container className="fluid">
      <h1>Todo APP using CONTEXT-API</h1>
      <Todos/>
      <TodoForms/>
      
      </Container>
      </TodoContext.Provider>
       
      
  
  );
}

export default App;
