import sequelize from "../dbconfig.js";
import { DataTypes } from "sequelize";

const AdmittingArrangements=sequelize.define('AdmittingArrangements',{
    country: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      state: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      hospitalName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM('Active', 'Inactive', 'Pending'),
        allowNull: false,
      },
      admitName: {
        type: DataTypes.ENUM('A Provider in my practice','A Provider not in my practice', 'A hospitalist group', 'Other'),
        allowNull: false,
      },
})

export default AdmittingArrangements