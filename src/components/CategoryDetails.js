// import { useCategoryContext } from "../hook/UseCategoryContext";

export const CategoryDetails = () => {
    // const { dispatch } = useCategoryContext()
    // const handleUpdate = () => {
    //     return {}
    // }

    // const handleDelete = async () => {
    //     const response = await fetch(`api/category/${category._id}`, {
    //         method: 'DELETE'
    //     })

    //     const jsonResponse = await response.json()

    //     if (response.ok) {
    //         // dispatch({ type: 'DELETE_TASKS', payload: jsonResponse })
    //     }
    // }

    return (
        <div className="task-details">
            {/* <Modal open={openModal} task={task} onClose={() => { setOpenModal(false) }} /> */}
            <h2><span className="bold">Category Name:</span>
                {/* <span id="status">{category.name[0].toUpperCase() + category.name.slice(1)}</span> */}
            </h2>
            <h2><span className="bold">Category ID:</span>
                {/* {category._id} */}
            </h2>
            <p><span className="bold">Created At:</span>
                {/* {category.createdAt} */}
            </p>
            <p><span className="bold">Updated At:</span>
                {/* {category.updatedAt} */}
            </p>
            {/* <span className="delete" onClick={handleDelete}>delete</span>
            <span className="update" onClick={handleUpdate}>update</span> */}
        </div>
    )
}