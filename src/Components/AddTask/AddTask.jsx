import React, { useState } from 'react'
import { Form, Button } from "react-bootstrap"
import "./AddTask.css"
import { useDispatch } from "react-redux"
import { addTask } from "../../Actions"

function AddTask() {

    const [toAddTask, setToAddTask] = useState("")

    const handleChange = (e) => {
        setToAddTask(e.target.value)
    }

    const dispatch = useDispatch();

    const handleSubmit = () => {
        if (toAddTask) {
            dispatch(addTask(toAddTask))
            setToAddTask("");
        }
        else alert("empty task")

    }

    return (
        <div className="AddTask">
            <h1>Todo App!</h1>
            <div className="addField">
                <Form.Control id='addTaskInput' size="lg" type="text" placeholder="Add task..." value={toAddTask} onChange={handleChange} />
                <Button variant="outline-primary" onClick={handleSubmit} style={{ border: "2px white solid", color: "white" }}>Add</Button>
            </div>
        </div>
    )
}

export default AddTask
