import { taskContext } from "../context/TaskContext";
import { useContext } from "react";

export const useTaskContext = () => {
    const context = useContext(taskContext)

    if (!context) {
        throw Error('The useTaskContext must be used inside its context provider')
    }

    return context
}