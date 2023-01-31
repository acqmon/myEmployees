import React, { useState } from "react";
import RegistrationPage from "./RegistrationPage";
import EmployeesList from "./EmployeesList";
import "./navbar.css";

function NavBar() {
    const [toggoleState, setToggleState] = useState(1);

    const activeClass = (index) => {
        setToggleState(index);
    };
    return (
        <div className="Container">
            <div className="header">
                <ul>
                    <li>My-Employee System</li>
                </ul>
            </div>
            <div className="contentContainer">
                <div className="navBar">
                    <ul className="navcontainer">
                        <li className={toggoleState === 1 ? "active" : "tab"} ><p onClick={() => activeClass(1)} >Register New Employee</p></li>
                        <li className={toggoleState === 2 ? "active" : "tab"}><p  onClick={() => activeClass(2)}  >Employess</p></li>
                    </ul>
                </div>
                <div className={toggoleState === 1 ? "content" : "noncontent"}>
                    <RegistrationPage />
                </div>
                <div className={toggoleState === 2 ? "content" : "noncontent"}>
                    <EmployeesList />
                </div>
            </div>
        </div >
    );
}

export default NavBar;;