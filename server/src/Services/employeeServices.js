import employee from "../Model/employeeModel.js";

export const getAllEmployeesList = async (req, res) => {
    employee.find({}, (error, result) => {
        if (error) { res.sed(error); } else { res.send(result); }
    });
};

export const newEmployee = async (req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    const contact = req.body.contact;
    const email = req.body.email;
    const address = req.body.address;
    const position = req.body.position;
    const salary = req.body.salary;

    const addNewEmployee = new employee({
        Name: name,
        Age: age,
        Contact: contact,
        Email: email,
        Address: address,
        Position: position,
        Salary: salary
    });

    try {
        await addNewEmployee.save();
        res.send("done");
    }
    catch (err) {
        res.send(err);
    }
};