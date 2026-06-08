import { Router} from 'express';
import { createEmployee, getEmployees, updateEmployee, deleteEmployee } from '../controllers/employeeController.js';
import { protect, protectAdmin } from '../middlware/auth.js';

const employeeRoutes = Router();

employeeRoutes.get('/', protect, protectAdmin,  getEmployees)
employeeRoutes.post('/',protect, protectAdmin, createEmployee)
employeeRoutes.put('/:id', protect, protectAdmin, updateEmployee)
employeeRoutes.delete('/:id', protect, protectAdmin, deleteEmployee)

export default employeeRoutes;