import React, { useEffect } from 'react'
import TodoItem from './TodoItem'


const TodoList = ({todoList,setTodoList}) => {

  const deleteTodo = (id) => {
    setTodoList((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const toggle=(id)=>{
    setTodoList((prevTodos)=>{
      return prevTodos.map((todo)=>{
        if(todo.id===id){
          return {...todo,isComplete:!todo.isComplete}
        }
        return todo;
      })
      
    })
  }


  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todoList))
  },[todoList])

  return (
    <div className='bg-white '>

{todoList.map((item, index) => (
        <TodoItem key={index} text={item.text} id={item.id} isComplete={item.isComplete}  deleteTodo={deleteTodo} toggle={toggle}/>
      ))}

 
    </div>
  )
}

export default TodoList
