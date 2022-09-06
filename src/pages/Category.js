import { useEffect } from "react";
import { useCategoryContext } from "../hook/UseCategoryContext"
// import { NewTaskForm } from "../components/NewTaskForm";
import { CategoryDetails } from "../components/CategoryDetails";


const Category = () => {
    const { category, dispatch } = useCategoryContext()

    // All Use states
    // const [openModal, setOpenModel] = useState(false)


    useEffect(() => {
        const fetchCategory = async () => {
            const response = await fetch('api/category')
            const jsonResponse = await response.json()

            if (response.ok) {
                dispatch({ type: 'SET_CATEGORY', payload: jsonResponse })
            }
        }

        fetchCategory()
    })

    return (
        <div className="home">
            <div className="container" >
                <div className="tasks">
                    {category && category.map((category) => (
                        <CategoryDetails key={category._id} category={category} />
                    ))}
                </div>
                {/* <NewTaskForm /> */}
            </div>
        </div>
    )
}

export default Category