import React, { useState } from 'react';

function ToDoList(){

    const [tasks, setTasks] = useState(["Get groceries", "Walk the dog", "Finish homework"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function AddTask(){
        if (newTask.trim() === "") {
            alert("Please enter a task.");
            return;
        }
        setTasks(t =>[...t, newTask]);
        setNewTask("");

    }

    function deleteTask(index){
        setTasks(tasks.filter((_, i) => i !== index));
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const newTasks = [...tasks];
            [newTasks[index - 1], newTasks[index]] = [newTasks[index], newTasks[index - 1]];
            setTasks(newTasks);
        }
    }

    function moveTaskDown(index){
        if (index < tasks.length - 1) {
            const newTasks = [...tasks];
            [newTasks[index + 1], newTasks[index]] = [newTasks[index], newTasks[index + 1]];
            setTasks(newTasks);
        }
    }

    return(
       
        <div className="todo-container">

            <h1>To Do List</h1>
            <div className="submit">
            <input type="text" onChange={handleInputChange} value={newTask} id="task" placeholder="Write a task" />
            <button id="submitBtn" onClick={AddTask}>Add Task</button>
            </div>

            <ol>
                {tasks.map((task, index) => (
                        <li key={index}><span className='text'>{task}</span>
                        <button className="deleteBtn" onClick={() => deleteTask(index)}>Delete</button>
                        <button className="updownBtn" onClick={() => moveTaskUp(index)}>👆</button>
                        <button className="updownBtn" onClick={() => moveTaskDown(index)}>👇</button>
                    </li>
                ))}
            </ol>
        </div>
       
    );


}


export default ToDoList;