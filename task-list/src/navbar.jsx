import { Link } from "react-router-dom";


const Navbar = ({token}) => {


    return ( 
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                
                <Link to={'/'} className="navbar-brand fw-bolder">TodoList</Link>
                <div className="d-flex gap-2">
                    {token 
                    ? <Link to={'/logout'} className="btn btn-outline-secondary">Logout</Link>
                    : 
                    <>
                    <Link to={'/login'} className="btn btn-outline-success">Log'in</Link>
                    <Link to={'/register'} className="btn btn-outline-primary">Register</Link>
                    </>
                }
                </div>
            </div>

        </nav>
     );
}
 
export default Navbar;