import "./navbar.css";
import {FaGlobe} from "react-icons/fa";
import {FaQuestionCircle} from "react-icons/fa";
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navContainer">
                <span className="logo">Booking.com</span>
                <div className="navItems">
                    <button className="navBtn btn-transparent">VND</button>
                    <button className="navBtn btn-transparent btn-icon"><FaGlobe/></button>
                    <button className="navBtn btn-transparent btn-icon"><FaQuestionCircle/></button>
                    <button className="navBtn btn-transparent"><a href="">Đăng chỗ nghỉ cho Quý vị</a></button>
                    <button className="navBtn">Đăng ký</button>
                    <button className="navBtn">Đăng nhập</button>
                </div>

            </div>
        </div>
    )
}

export default Navbar