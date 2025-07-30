import React, { useReducer } from 'react'
import TodoForm from './TodoForm';
import Listshow from './Listshow';


const InitialTodos=[]

const TodoReducer=(state,action)=>
{
    switch(action.type)
    {
        case 'TodoADD':
            const newTodo={
                id:Date.now(),
                text:action.payload,
                completed:false
            }
            return [...state,newTodo];

           case 'TODODELETE':
            return state.filter((todo)=>todo.id!=action.payload);

            case 'TOGGLETODO':
              return state.map((todo) =>
              todo.id===action.payload?
              {...todo,completed:!todo.completed}:todo

              );


                   

            default:
                return state;
    }
}

const Todo = () => {

    const[Todos,dispatch]=useReducer(TodoReducer,InitialTodos);
  return (
    <div className="min-h-screen bg-black">
    <h1 className="text-3xl md:text-4xl font-bold text-white text-center py-6 bg-red-600 bg-opacity-80 rounded shadow-md">
      TodoAPP
    </h1>
    <TodoForm dispatch={dispatch} />
    <Listshow Todos={Todos} dispatch={dispatch} />
  </div>
  
  )
}

export default Todo
