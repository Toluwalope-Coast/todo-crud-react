import { createContext, useReducer } from 'react'

export const categoryContext = createContext()


export const categoryReducer = (state, action) => {
    switch (action.type) {
        case 'SET_CATEGORY':
            return {
                category: action.payload
            }
        case 'CREATE_CATEGORY':
            return {
                category: [action.payload, ...state.categories]
            }
        case 'DELETE_CATEGORY':
            return {
                category: state.categories.filter((category) => category._id !== action.payload._id)
            }
        case 'UPDATE_CATEGORY':
            return {
                category: action.payload
            }
        default:
            return state
    }
}

export const CategoryContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(categoryReducer, {
        category: null
    })

    return (
        <categoryContext.Provider value={{ ...state, dispatch }}>
            {children}
        </categoryContext.Provider>
    )
}