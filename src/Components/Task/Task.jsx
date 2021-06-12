import React from 'react'
import { Button } from "react-bootstrap"
import "./Task.css"
import { useDispatch } from "react-redux"
import { changeIsDone } from "../../Actions/"
import EditTask from '../EditTask/EditTask'

function Task({ toDo_task, index }) {
    const dispatch = useDispatch();
    return (
        <div className="task">
            <h4 style={{ textDecoration: toDo_task.isDone ? "line-through" : "none" }}><span className="Task_Number">Task {Number(index) + 1}:</span> {toDo_task.task}</h4>
            <div className="taskBtns">
                <Button variant={toDo_task.isDone ? "outline-danger" : "success"} className="done-btn" onClick={() => dispatch(changeIsDone(toDo_task.id))}>{toDo_task.isDone ? "Undo" : "Done"}</Button>
                <EditTask id={toDo_task.id} />
            </div>
        </div>
    )
}

export default Task
