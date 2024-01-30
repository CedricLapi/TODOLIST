import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/Form';
import View from './components/View';

function App() {
  //Having state at the highest level to share amongst the children

  //What do i want to track, what is basically changing, what do i wanna make dynamic?
  //inputs are changing
  //Starting out with an empty string, cuz we want a clean slate

  const [task, setTask] = useState("");

  //List (array) is changing
  //setting it empty square brackets so we don't get an error

  const [todoList, setTodoList] = useState([])

  return (
    <>
    <Form todoList={todoList} setTodoList={setTodoList} task={task} setTask={setTask} />
    <View todoList={todoList} setTodoList={setTodoList} task={task} setTask={setTask} />
    
    </>
  )
}

export default App;
