import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./Navbar.scss";
import { logout } from "../slices/authSlice";
import { RootState } from "../store/store";

const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector((state: RootState) => state.auth.currentUser);

    const handleLogout = () => {
        dispatch(logout());
        navigate("/");
    };

    return (
        <header className="navbar">
            <div className="nav-left">
                <Link to="/dashboard" className="nav-item">Dashboard</Link>
                <Link to="/dashboard/profile" className="nav-item">Profile</Link>
                <Link to="/dashboard/score" className="nav-item">Score</Link>
            </div>
            <div className="nav-right">
                <img
                    src={user?.img}
                    alt="img"
                    className="user-image"
                />

                <div className="user-status">
                    <h3>{user?.status}</h3>
                </div>


                <button className="logout-button" onClick={handleLogout}>Logout</button>
            </div>
        </header>
    );
};

export default Navbar;

