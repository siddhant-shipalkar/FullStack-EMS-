
import Employee from "../models/Employee.js";
//Get profile
//GET /api/profile


export const getProfile = async (req, res) =>{
        try {
            const session = req.session;
          const employee = await Employee.findOne({
            userId: session.userId
          })
          if(!employee) {
            //Authenticated user in jot an employee - return admin profile
            return res.json({
                firstName : "Admin",
                lastName: "",
                email: session.email
            })
          }

          return res.json(employee)

        } catch (error) {
            return res.status(500).json({error: " Filed to fetch profile"})
        }
}

// Update profile 
// PUT/api/profile 

export const updateProfile = async (req, res) =>{
        try {
            const session = req.session
            const employee = await Employee.findOne({
            userId: session.userId
          })
           if(!employee) return res.status(404).json({error: "Employee not found"})
            if(employee.isDeleted) {
                return res.status(403).json({error: "Your account is deactivated your cannot update your profile"})
            }

            await Employee.findByIdAndUpdate(employee._id, {
                bio: res.body.bio
            })
            return res.json({success: true})
        } catch (error) {
            return res.status(500).json({error : "Failed to update profile  "})
        }
}