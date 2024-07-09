import express from 'express'
import User from '../models/AdmittingPrivileges.js';

const userRouter=express.Router();

userRouter.post('/',async(req,res)=>{
    try{
        const {
            state,
            country,
            hospitalName,
            isPrimaryHospital,
            status,
            privilegeType,
            annualPercentage,
            contactFirstName,
            contactMiddleInitial,
            contactLastName,
            department,
          } = req.body;

          const admittingPrivilegeRecord = await User.create({
            state,
            country,
            hospitalName,
            isPrimaryHospital,
            status,
            privilegeType,
            annualPercentage,
            contactFirstName,
            contactMiddleInitial,
            contactLastName,
            department,
          });
      
          res.status(201).json(admittingPrivilegeRecord);
    }
    catch(error){
        res.json({ error: error.message });
    }
})

export const getAllUsers = async (req, res) => {
    try {
      const users = await User.findAll();
      res.status(200).json(users);
    } catch (error) {
      res.json({ error: error.message });
    }
  };
  export const getUser = async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
  
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      res.json({ error: error.message });
    }
  };

  export const updateUser = async (req, res) => {
    try {
      const { id } = req.params;
      const {
        state,
        country,
        hospitalName,
        isPrimaryHospital,
        status,
        privilegeType,
        annualPercentage,
        contactFirstName,
        contactMiddleInitial,
        contactLastName,
        department,
      } = req.body;
  
      const user = await User.findByPk(id);
  
      if (user) {
        await user.update({
          state,
          country,
          hospitalName,
          isPrimaryHospital,
          status,
          privilegeType,
          annualPercentage,
          contactFirstName,
          contactMiddleInitial,
          contactLastName,
          department,
        });
  
        res.status(200).json(user);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      res.json({ error: error.message });
    }
  };

  export const deleteUser = async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
  
      if (user) {
        await user.destroy();
        res.status(204).json();
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      res.json({ error: error.message });
    }
}
export default userRouter