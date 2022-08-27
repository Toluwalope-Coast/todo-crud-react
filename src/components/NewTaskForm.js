import { type } from "@testing-library/user-event/dist/type"
import { useState, useEffect } from "react"
import { useTaskContext } from "../hook/UseTasKContext"

export const NewTaskForm = () => {

    const { dispatch } = useTaskContext()
    const [title, setTitle] = useState('')
    const [categories, setCategories] = useState(null)
    const [category, setCategory] = useState('')
    const [error, setError] = useState(null)


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

        const task = { title, "category_id": category }

        console.log(JSON.stringify(task))

        const response = await fetch('/api/task', {
            method: 'POST',
            body: JSON.stringify(task),
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
            setCategory('')
            setError(null)
            dispatch({ type: 'CREATE_TASKS', payload: jsonResponse })
            console.log('New Task added', jsonResponse)
        }
    }


    return (
        <form className="add-task" onSubmit={submit}>
            <h3>Add a New Task</h3>

            <label for="title-selector">Task Title</label>
            <input id="title-selector" type="text" required onChange={(event) => setTitle(event.target.value)} />

            <label for="category-selector">Category :</label>
            <select name="" id="category-selector" required onChange={(event) => setCategory(event.target.value)}>
                <option>Please select the Category</option>
                {categories && categories.map((category) => <option value={category._id}>{category.name}</option>)}
            </select>
            <button>Add Task</button>


            {error && <p className="error"> {error}</p>}

        </form>
    )
}