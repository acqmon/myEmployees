import Express from "express";
import { newEmployee, getAllEmployeesList } from "../Services/employeeServices.js";

const router = Express.Router();

router.post("/newemployee", newEmployee);
router.get("/myemployees", getAllEmployeesList);

export default router;