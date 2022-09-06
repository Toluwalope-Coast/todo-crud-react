import { createContext, useReducer } from 'react'

export const taskContext = createContext()


export const taskReducer = (state, action) => {
    switch (action.type) {
        case 'SET_TASKS':
            return {
                tasks: action.payload
            }
        case 'CREATE_TASKS':
            return {
                tasks: [...state.tasks]
            }
        case 'DELETE_TASKS':
            return {
                tasks: state.tasks.filter((task) => task._id !== action.payload._id)
            }
        case 'UPDATE_TASKS':
            return {
                tasks: action.payload
            }
        default:
            return state
    }
}

export const TasksContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(taskReducer, {
        task: null
    })

    return (
        <taskContext.Provider value={{ ...state, dispatch }}>
            {children}
        </taskContext.Provider>
    )
}