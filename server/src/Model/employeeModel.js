import mongoose from "mongoose";

const employee = new mongoose.Schema({
    Name: { type: String, required: true },
    Age: { type: Date, required: true },
    Contact: { type: Number, required: true },
    Email: { type: String, required: true },
    Address: { type: String, required: true },
    Position: { type: String, required: true },
    Salary: { type: Number, required: true },
    Date_of_Join: { type: Date, default: Date.now() }
});

const employeeModel = mongoose.model("employee", employee);

export default employeeModel;