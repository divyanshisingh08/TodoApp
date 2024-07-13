import React from 'react'
import { useState } from 'react'
import TodoList from './TodoList'
import Header from './Header'

const Body = () => {

    const [todoList, setTodoList] = useState(localStorage.getItem("todos")? JSON.parse(localStorage.getItem("todos")):[]);
  return (
    <div className='bg-white place-self-center w-11/12 max-w-md
     flex flex-col p-7 min-h-[550px] rounded-xl'>
       <Header setTodoList={setTodoList} />
       <TodoList todoList={todoList} setTodoList={setTodoList} />
     
    </div>
  )
}

export default Body
