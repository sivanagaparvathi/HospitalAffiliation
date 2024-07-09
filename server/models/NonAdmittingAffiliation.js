import sequelize from "../dbconfig.js";
import { DataTypes } from "sequelize";

const NonAdmittingAffiliation=sequelize.define('NonAdmittingAffiliation',{
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
})

export default NonAdmittingAffiliation;


// const AproviderNotInMyPractice=sequelize.define('AprovideInMyPractice',{
//   FirstName: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     LastName: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     isAdmittingSpeciality: {
//       type: DataTypes.BOOLEAN,
//       allowNull: false,
//     },
//     PhoneNumber: {
//       type: DataTypes.NUMBER,
//       allowNull: false,
//     },
//     Email: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     NPINumber: {
//       type: DataTypes.NUMBER,
//       allowNull: false,
//     },
//     Description:{
//       type: DataTypes.STRING,
//       allowNull: false,
//     }
// })

// const HospitalGroup=sequelize.define('HospitalGroup',{
//   GroupName: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     OrganisationNpiNumber: {
//       type: DataTypes.NUMBER,
//       allowNull: false,
//     },
   
//     PhoneNumber: {
//       type: DataTypes.NUMBER,
//       allowNull: false,
//     },
//     Email: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
   
//     Description:{
//       type: DataTypes.STRING,
//       allowNull: false,
//     }
// })

// const Others=sequelize.define('Others',{
 
//     PhoneNumber: {
//       type: DataTypes.NUMBER,
//       allowNull: false,
//     },
//     Email: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
   
//     Description:{
//       type: DataTypes.STRING,
//       allowNull: false,
//     }
// })

const AdmittingPrivilegeActive=sequelize.define('AdmittingPrivilegeActive',{
 
      Date: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
  
  })

  const AdmittingPrivilegeInactive=sequelize.define('AdmittingPrivilegInactive',{
 
    StartDate: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    EndDate: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    Reason: {
      type: DataTypes.String,
      allowNull: false,
    },


})

const AdmittingArrangementsActive=sequelize.define('AdmittingArrangementsActive',{
 
  Date: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  Description: {
    type: DataTypes.STRING,
    allowNull: false,
  },

})

const AdmittingArrangementsInactive=sequelize.define('AdmittingArrangementsInactive',{
 
  StartDate: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  EndDate: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  Reason: {
    type: DataTypes.String,
    allowNull: false,
  },
  Description: {
    type: DataTypes.String,
    allowNull: false,
  },


})

const AdmittingArrangementsPending=sequelize.define('AdmittingArrangementsPending',{
 
  
  Description: {
    type: DataTypes.String,
    allowNull: false,
  },


})