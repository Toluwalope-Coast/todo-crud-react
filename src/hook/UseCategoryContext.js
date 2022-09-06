import { categoryContext } from "../context/CartegoryContext";
import { useContext } from "react";

export const useCategoryContext = () => {
    const context = useContext(categoryContext)

    if (!context) {
        throw Error('The useCategoryContext must be used inside its context provider')
    }

    return context
}