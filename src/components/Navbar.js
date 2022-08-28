import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header>
            <div className='container'>
                <Link to="/">
                    <h1>To Do List</h1>
                </Link>
                <Link to="/category">
                    <h2>Category</h2>
                </Link>
            </div>
        </header>
    )
}

export default Navbar