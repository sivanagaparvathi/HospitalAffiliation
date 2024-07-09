import express from 'express'
import AdmittingArrangements from '../models/AdmittingArrangements.js'

const admittingRouter=express.Router()

admittingRouter.post('/',async(req,res)=>{
    try{
        const {
            state,
            country,
            hospitalName,
            status,
            admitName,
           
          } = req.body;

          const admittingArrangementRecord = await AdmittingArrangements.create({
            state,
            country,
            hospitalName,
            status,
            admitName,
          });
      
          res.status(201).json(admittingArrangementRecord);
    }
    catch(error){
        res.json({ error: error.message });
    }
})

admittingRouter.get('/', async (req, res) => {
    try {
        const admittingArrangementRecords = await User.find(); // Assuming User is your model
        res.status(200).json(admittingArrangementRecords);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET one record by ID
admittingRouter.get('/:id', async (req, res) => {
    try {
        const admittingArrangementRecord = await User.findById(req.params.id); // Assuming User is your model
        if (!admittingArrangementRecord) {
            return res.status(404).json({ message: 'Record not found' });
        }
        res.status(200).json(admittingArrangementRecord);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// PATCH (update) a record by ID
admittingRouter.patch('/:id', async (req, res) => {
    try {
        const { state, country, hospitalName, status, admitName } = req.body;
        const updatedRecord = await User.findByIdAndUpdate(req.params.id, 
            { state, country, hospitalName, status, admitName },
            { new: true }); // Returns updated record
        if (!updatedRecord) {
            return res.status(404).json({ message: 'Record not found' });
        }
        res.status(200).json(updatedRecord);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// DELETE a record by ID
admittingRouter.delete('/:id', async (req, res) => {
    try {
        const deletedRecord = await User.findByIdAndDelete(req.params.id); // Assuming User is your model
        if (!deletedRecord) {
            return res.status(404).json({ message: 'Record not found' });
        }
        res.status(200).json({ message: 'Record deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default admittingRouter;
