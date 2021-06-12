import React, { useState, useEffect } from 'react'
import Task from '../Task/Task'
import "./ListTask.css"
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap"

function ListTask() {
    const todos = useSelector(state => state.todosReducer.todos)

    const [todosList, setTodosList] = useState(todos)
    const [showDone, setShowDone] = useState(false)
    const [showNotDone, setShowNotDone] = useState(false)

    const handleTodosList = () => {
        console.log("handleTodos was executed")
        if (showDone === true) {
            setTodosList(todos.filter(task => task.isDone === true))
        }
        else if (showNotDone === true) {

            setTodosList(todos.filter(task => task.isDone === false))
        }
    }
    useEffect(() => {
        handleTodosList()
        // eslint-disable-next-line
    }, [showNotDone, showDone, todos])

    const handleShowDone = () => {
        setShowDone(true)
    }
    const handleShowNotDone = () => {
        setShowDone(false)
        setShowNotDone(true)
    }
    const handleReset = () => {
        setShowDone(false);
        setShowNotDone(false)
    }

    return (
        <div className="listTask">
            <div className="filter_btns" style={{ marginBottom: "25px" }}>
                <Button variant="outline-success" onClick={handleShowDone}>Show Done</Button>
                <Button variant="outline-danger" onClick={handleShowNotDone} > Show Not Done</Button>
                <Button variant="info" onClick={handleReset}>Remove All Filters</Button>
            </div>
            {
                showDone === true
                    ? todosList.map((task, index) => (<Task toDo_task={task} key={index} index={index} />))
                    : showNotDone === true
                        ? todosList.map((task, index) => (<Task toDo_task={task} key={index} index={index} />))
                        : todos.map((task, index) => <Task toDo_task={task} key={index} index={index} />)
            }
        </div >
    )
}

export default ListTask
