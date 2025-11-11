import {Link} from 'react-router-dom'
function NavBar() {

    /* This is where we define the clickable links.
    The routes in App.jsx define the target for these links */
    return (
        <nav>
            <Link to="/">Add Student</Link>
            <Link to="/students">Students</Link>
        </nav>
  )
}

export default NavBar