import React, { useState } from 'react'
import todo_icon from '../assets/todo_icon.png'
import { useRef } from 'react'

const Header = ({ setTodoList }) => {
  
    const inputRef=useRef()
    const add=()=>{
        const inputText=inputRef.current.value.trim();
        console.log(inputText)
        if(inputText===""){
            return null;
        }
        const newTodo={
            id:Date.now(),
            text:inputText,
            isComplete:false,
        }
        setTodoList((prev)=>[...prev,newTodo])
        
        inputRef.current.value="";
      }

    

  return (
    <div>
    <div className='flex items-center mt-7 gap-2'>
    <img src={todo_icon} alt="" className='w-8'/>
     <h1 className='text-3xl font-semibold'>To-Do List</h1>
    </div>
    <div className='flex items-center my-7 bg-gray-200 rounded-full'>
       <input ref={inputRef} type='text' placeholder='Add New Task' className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600'/>
       <button className=' border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium curser-pointer' onClick={add}> ADD +</button> 
    </div>
    </div>
  )
}

export default Header
