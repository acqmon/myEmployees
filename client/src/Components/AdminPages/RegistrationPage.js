import React, { useState } from "react";
import axios from "axios";
import "./registrationpage.css"

function RegistrationPage() {
    const [name, setName] = useState("");
    const [dateofbirth, setDateofBirth] = useState("");
    const [contact, setContact] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [designation, setDesignation] = useState("");
    const [salary, setSalary] = useState("");

    function addNewEmployee() {
        axios.post("http://localhost:5000/newemployee", {
            name: name,
            age: dateofbirth,
            contact: contact,
            email: email,
            address: address,
            position: designation,
            salary: salary
        });
    }
    return (
        <div className="registerationPage">
            <form className="formContainer">
                <span>Name</span><input onChange={(e) => { setName(e.target.value); }} type="text" />
                <span>Date of Birth</span><input onChange={(e) => { setDateofBirth(e.target.value); }} type="date" />
                <span>Contact</span><input onChange={(e) => { setContact(e.target.value); }} type="Number" />
                <span>Email</span><input onChange={(e) => { setEmail(e.target.value); }} type="text" />
                <span>Address</span><input onChange={(e) => { setAddress(e.target.value); }} type="text" />
                <span>Designation</span><input onChange={(e) => { setDesignation(e.target.value); }} type="text" />
                <span>Salary</span><input onChange={(e) => { setSalary(e.target.value); }} type="number" />
                <button className="regButton" onClick={addNewEmployee} type="button">Register</button>
            </form>
        </div>
    );
}

export default RegistrationPage;