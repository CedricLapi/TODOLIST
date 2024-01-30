import React, { useState } from 'react'

const View = ({task, setTask, todoList, setTodoList}) => {

    console.log("TASK from DISPLAY -->", task)
    console.log("LIST, todoList")

    const [strikethrough, setStrikethrough] = useState('')

    const [checkedColor, setCheckedColor] = useState('')

    //DELETE FUNCTION
    const deleteTodo = (deletedTodoId) => {
        console.log(deletedTodoId);
        //using filter because we're removing an item
        const filteredList = todoList.filter((todoItem) => todoItem.id !== deletedTodoId)
        console.log("FILTERED LIST ===>", filteredList)
        setTodoList(filteredList)
    }

    // todo -> fix strikethrough
    const handleCheck = (event, idx) => {
        console.log("INDEX =====>", idx)
        let copyTodoList = [...todoList]
        copyTodoList[idx].completed = event.target.checked
        setTodoList(copyTodoList)
    }


  return (
    
        <ul className='list-container'>
            {
                todoList.map( (oneTodo, index) => (
                    <div key={index} style={{display: "flex", margin: '15px'}}>
                        <li style={{textDecoration: todoList.completed ? "line-through": "None"}}>
                            {oneTodo.text}
                        </li>

                        <input
                        checked ={oneTodo.completed}
                        type="checkbox"
                        onChange={(event) => handleCheck(event, index)} />

                        <button className='btn btn-danger' onClick={(e) => deleteTodo(oneTodo.id)}> Delete</button>

                    </div>
                ))
            }
            
        </ul>
    
    
  )
}

export default View;