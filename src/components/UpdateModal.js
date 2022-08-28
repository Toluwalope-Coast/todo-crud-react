import { useEffect, useState } from "react";
import { useTaskContext } from "../hook/UseTasKContext";
export const Modal = ({ open, task, onClose }) => {


    const { dispatch } = useTaskContext()
    const [title, setTitle] = useState(task.title)
    const [categories, setCategories] = useState(null)
    const [category, setCategory] = useState('')
    const [error, setError] = useState(null)
    const [task_status, setTaskStatus] = useState(task.task)


    useEffect(() => {
        const fetchCategory = async () => {
            const response = await fetch('api/category')
            const jsonResponse = await response.json()

            if (response.ok) {
                setCategories(jsonResponse)
            }
        }

        fetchCategory()
    }, [])


    const submit = async (e) => {
        e.preventDefault()

        title && setTitle(task.title)
        // category_id && setCategories(task.category_id)
        task_status && setTaskStatus(task.task_status)

        const updatedTask = { title, "category_id": category, "_id": task._id, task_status }

        console.log(JSON.stringify(updatedTask))

        const response = await fetch(`/api/task/${task._id}`, {
            method: 'PATCH',
            body: JSON.stringify(updatedTask),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const jsonResponse = await response.json()

        if (!response.ok) {
            setError(jsonResponse.error)
        }
        if (response.ok) {
            setTitle('')
            setTaskStatus('')
            setCategory('')
            dispatch({ type: 'CREATE_TASKS', payload: jsonResponse })
            console.log('Task updated', jsonResponse)
            onClose()
        }
    }

    if (!open) {
        return null
    } else {

        return (
            <div className="update-modal" onClick={onClose}>

                <form className="update-task" onSubmit={submit} onClick={(e) => {
                    e.stopPropagation();
                }}>
                    <h3>Update Task</h3>

                    <label for="title-selector">Task Title</label>
                    <input id="title-selector" placeholder={task.title} type="text" onChange={(event) => setTitle(event.target.value)} />

                    <label for="category-selector">Category :</label>
                    <select name="" id="category-selector" required onChange={(event) => setCategory(event.target.value)}>
                        <option>Please select the Category</option>
                        {categories && categories.map((category) => <option value={category._id}>{category.name}</option>)}
                    </select>
                    <label for="category-selector">Status :</label>
                    <select name="" id="category-selector" required onChange={(event) => setTaskStatus(event.target.value)}>
                        <option value={null}>Please select the Category</option>
                        <option value="on-going">On Going</option>
                        <option value="awaiting_review">Awaiting Review</option>
                        <option value="completed">Completed</option>
                    </select>
                    <div className="close-modal" onClick={onClose}>X</div>
                    <button>Add Task</button>


                    {error && <p className="error"> {error}</p>}

                </form>

            </div>
        )
    }
}