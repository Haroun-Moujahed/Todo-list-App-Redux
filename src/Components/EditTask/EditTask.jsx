import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Modal, Button, Form } from "react-bootstrap"
import { editTask } from "../../Actions"

function EditTask({ id }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const taskItem = useSelector(state => state.todosReducer.todos.find(el => el.id === id));

    const [taskText, setTaskText] = useState(taskItem.task)

    const dispatch = useDispatch();

    const handleSubmit = () => {
        dispatch(editTask({ id, taskText }))
        handleClose()
    }

    const handleChange = (e) => {
        setTaskText(e.target.value)
    }


    return (
        <>
            <Button variant="outline-dark" onClick={handleShow}>
                Edit
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Task </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Control type="text" placeholder="Edit task your task here..." defaultValue={taskItem.task} onChange={handleChange} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EditTask