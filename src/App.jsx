import { useState } from 'react'
import { useEffect } from 'react'
import CreateTaskForm from './CreateTaskForm.jsx'
import TodoList from './TodoList.jsx'

function App() {
  const [todoList, setTodoList] = useState(
    () => {
      if (localStorage.getItem("ITEM") == null) return []

      return JSON.parse(localStorage.getItem("ITEM"))
    }
  )
  useEffect(()=>{
    localStorage.setItem("ITEM", JSON.stringify(todoList))
  },[todoList])
  function toggleTodo(id, completed) {
    setTodoList(currentTodo => currentTodo.map(
      (item) => {
        if (item.id === id) {
          return { ...item, completed }; // Return the modified item
        } else {
          return item; // Return the unmodified item
        }
      }
    ))
  }

  function addTodo(title, date) {
    setTodoList(currentTodo => [...currentTodo,
    {
      id: crypto.randomUUID(),
      title,
      date,
      completed: false
    }])
  }

  function deleteTodo(id) {
    setTodoList(currentTodo => currentTodo.filter(
      (item) => item.id != id
    ))
  }
  return (
    <>
      <div className="container mx-auto max-h-screen flex flex-col p-6">
      <CreateTaskForm onSubmit={addTodo}/>
        {
          todoList.length != 0 &&
          <TodoList todoList={todoList} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
        }
      </div>
    </>
  )
}

export default App
