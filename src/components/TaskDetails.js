import { useState } from "react";
import { useTaskContext } from "../hook/UseTasKContext"
import { Modal } from "./UpdateModal";


export const TaskDetails = ({ task }) => {
    const [openModal, setOpenModal] = useState(false)
    const { dispatch } = useTaskContext()
    // const statusCssUpdater = (status) => {
    //     if (status === "completed") {
    //         if (document.getElementById("status").classList.contains('review')) {
    //             document.getElementById('status').classList.remove("review");
    //         } else {
    //             document.getElementById('status').classList.add("completed");
    //         }
    //     } else if (status === "review") {
    //         if (document.getElementById("status").classList.contains('completed')) {
    //             document.getElementById('status').classList.remove("completed");
    //         } else {
    //             document.getElementById('status').classList.add("review");
    //         }
    //     } else {

    //         if (document.getElementById("status").classList.contains('review')) {
    //             document.getElementById('status').classList.remove("review");
    //         } else if (document.getElementById("status").classList.contains('completed')) {
    //             document.getElementById('status').classList.remove("completed");
    //         } else {

    //         }
    //     }
    // }
    const handleUpdate = () => {
        return setOpenModal(true)
    }

    const handleDelete = async () => {
        const response = await fetch(`api/task/${task._id}`, {
            method: 'DELETE'
        })

        const jsonResponse = await response.json()

        if (response.ok) {
            dispatch({ type: 'DELETE_TASKS', payload: jsonResponse })
        }
    }

    return (
        <div className="task-details">
            <Modal open={openModal} task={task} onClose={() => { setOpenModal(false) }} />
            <h4><span className="bold">Task ID:</span>{task.title[0].toUpperCase() + task.title.slice(1)}</h4>
            <p><span className="bold">Category Name:</span>{task.category_name}</p>
            <p><span className="bold">Task Status:</span><span id="status">{task.task_status[0].toUpperCase() + task.task_status.slice(1)}</span></p>
            <p><span className="bold">Created At:</span>{task.createdAt}</p>
            <p><span className="bold">Updated At:</span>{task.updatedAt}</p>
            <span className="delete" onClick={handleDelete}>delete</span>
            <span className="update" onClick={handleUpdate}>update</span>
        </div>
    )
}