import sequelize from "../dbconfig.js";
import { DataTypes } from "sequelize";


const User=sequelize.define('User',{
    state: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      country: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      hospitalName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isPrimaryHospital: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM('Active', 'Inactive', 'Pending'),
        allowNull: false,
      },
      privilegeType: {
        type: DataTypes.ENUM('Full and Unrestricted', 'Temporary', 'Limited'),
        allowNull: false,
        
      },
      percentageOfAdmissions: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      contactFirstName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      contactMiddleInitial: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      contactLastName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      department: {
        type: DataTypes.STRING,
        allowNull: true,
      },
},{})

export default User