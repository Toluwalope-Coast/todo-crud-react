export const TaskDetails = ({ task }) => {
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
    return (
        <div className="task-details">
            <h4><span className="bold">Task ID:</span>{task.title[0].toUpperCase() + task.title.slice(1)}</h4>
            <p><span className="bold">Category ID:</span>{task.category_id}</p>
            <p><span className="bold">Task Status:</span><span id="status">{task.task_status[0].toUpperCase() + task.task_status.slice(1)}</span></p>
            <p><span className="bold">Created At:</span>{task.createdAt}</p>
            <p><span className="bold">Updated At:</span>{task.updatedAt}</p>
        </div>
    )
}