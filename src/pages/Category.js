import { useEffect } from "react";
import { NewTaskForm } from "../components/NewTaskForm";
import { TaskDetails } from "../components/TaskDetails";
// import { Modal } from "../components/UpdateModal";
import { useTaskContext } from "../hook/UseTasKContext";

const Category = () => {
    const { tasks, dispatch } = useTaskContext()

    // All Use states
    // const [openModal, setOpenModel] = useState(false)


    useEffect(() => {
        const fetchTasks = async () => {
            const response = await fetch('api/task')
            const jsonResponse = await response.json()

            if (response.ok) {
                dispatch({ type: 'SET_TASKS', payload: jsonResponse })
            }
        }

        fetchTasks()
    })

    return (
        <div className="home">
            <div className="container" >
                <div className="tasks">
                    {tasks && tasks.map((task) => (
                        <TaskDetails key={task._id} task={task} />
                    ))}
                </div>
                <NewTaskForm />
            </div>
        </div>
    )
}

export default Category