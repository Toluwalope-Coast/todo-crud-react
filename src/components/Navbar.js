import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header>
            <Link to="/">
                <h1>To Do List</h1>
            </Link>
        </header>
    )
}

export default Navbar