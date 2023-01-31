import express from "express";
import mongoose from "mongoose";
import cors from "cors"

import router from "./src/Controlers/employeeControls.js"

const app = express();
app.use(express.json())
app.use(cors())
app.use(router)

mongoose.connect("mongodb://localhost:27017/EmployeeDetails", { useNewUrlParser: true });

app.listen(5000, () => {
    console.log("app is running on port 5000");
});