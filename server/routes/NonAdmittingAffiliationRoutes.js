import express from 'express'
import NonAdmittingAffiliation from '../models/NonAdmittingAffiliation.js'

const nonAdmittingRouter=express.Router()

nonAdmittingRouter.post('/',async(req,res)=>{
    try{
        const {
            country,
            state,
            hospitalName,
            status,
           
          } = req.body;

          const NonAdmittingAffiliationRecord= await NonAdmittingAffiliation.create({
            
            country,
            state,
            hospitalName,
            status,
            
          });
      
          res.status(201).json(NonAdmittingAffiliationRecord);
    }
    catch(error){
        res.json({ error: error.message });
    }
})

nonAdmittingRouter.get('/', async (req, res) => {
    try {
      const records = await NonAdmittingAffiliation.findAll();
      res.status(200).json(records);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

  nonAdmittingRouter.get('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const record = await NonAdmittingAffiliation.findByPk(id);
      if (!record) {
        return res.status(404).json({ error: 'Record not found' });
      }
      res.status(200).json(record);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

  nonAdmittingRouter.patch('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const record = await NonAdmittingAffiliation.findByPk(id);
      if (!record) {
        return res.status(404).json({ error: 'Record not found' });
      }
      const updatedRecord = await record.update(req.body);
      res.status(200).json(updatedRecord);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  nonAdmittingRouter.delete('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const record = await NonAdmittingAffiliation.findByPk(id);
      if (!record) {
        return res.status(404).json({ error: 'Record not found' });
      }
      await record.destroy();
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

  export default nonAdmittingRouter;

