import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import store
 from './store'
const Navbar = () => {
    return (
        <div className="navbar">
            <nav>
                <Link to="/">Home</Link>{" "}
                <Link to="/login">Login</Link>{" "}
                <Link to="/forgot_password">Forgot Password</Link>
            </nav>
        </div>
        // <ul>
        //     <li>HOME</li>
        //     <li>{
        //     store.getState().currentUser 
        //         ? 
        //     store.getState().currentUser.email 
        //         : 
        //     'LOGIN'}
        //     </li>
        // </ul>
    )
}

const mapStateToProps = (state) => state
export default Navbar