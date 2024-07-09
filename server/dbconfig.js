import { Sequelize } from "sequelize";

const sequelize = new Sequelize('Hospital-Affliation', 'postgres', 'SNP@123', {
    host: 'localhost',
    dialect: 'postgres',
  });
  
export default sequelize