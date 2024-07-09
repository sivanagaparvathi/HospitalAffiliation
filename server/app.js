import express from 'express'
import sequelize from './dbconfig.js'
import router from  './routes/index.js'
import cors from 'cors'

const app=express()
app.use(express.json())
app.use(cors())
app.use('/api',router)

const port='3008'
sequelize.sync({ force: false })  
  .then(() => {
    console.log('Database synchronized');
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Error synchronizing the database:', error);
  });