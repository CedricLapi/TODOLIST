import React from 'react'
import {v4 as uuidv4} from 'uuid';


const Form = ({task, setTask, todoList, setTodoList}) => {

    let myUuid = uuidv4();

    const createTodo = (event) => {
        event.preventDefault()
        console.log("click", myUuid)
        let newTodoObj = {
            id : myUuid,
            text: task,
            completed: false
        }
        console.log("NEW TODO ==>", newTodoObj);
        // copy my previous list and add the new todo at the end
        setTodoList([...todoList, newTodoObj])
        setTask("")
    } 

    

  return (
    <div>
        <form className='form-inline p-4' onSubmit={createTodo}>
            <div className="form-group mb-2">
                <label htmlFor="" className="sr-only">What do you need to do</label>
                <input
                 type="text" 
                 className="form-control-plaintext"
                 placeholder='type text here'
                 name="task"
                 onChange={(event) => setTask(event.target.value)} 
                 value={task}
                  />
            </div>
            <button type="submit" className="btn btn-warning mb-2">Submit</button>
        </form>
    </div>

  )
}

export default Form;