import React, { useState, useEffect } from "react";
import axious from "axios";
import "./employeeslist.css"

function EmployessList() {
    const [list, setList] = useState([]);

    function getEmployees() {
        axious.get("http://localhost:5000/myemployees").then((response) => {
            setList(response.data);
        });
    }

    useEffect(() => {
        getEmployees();
    }, []);

    return (
        <div className="listContainer">
            <table>
                <thead>
                    <tr>
                        <th>sl</th>
                        <th>Name</th>
                        <th>Contact</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>designation</th>
                        <th>Salary</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((item, index) => (
                        <tr key={item._id}>
                            <th scope="row">{index + 1}</th>
                            <td>{item.Name}</td>
                            <td>{item.Contact}</td>
                            <td>{item.Email}</td>
                            <td>{item.Address}</td>
                            <td>{item.Position}</td>
                            <td>{item.Salary}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default EmployessList;