import User from "./AdmittingPrivileges.js"; // Adjust path as needed
import sequelize from "../dbconfig.js";
import AdmittingArrangements from "./AdmittingArrangements.js"; // Adjust path as needed
import NonAdmittingAffiliation from "./NonAdmittingAffiliation.js";


const syncUser = User.sync();
const syncAdmittingArrangements = AdmittingArrangements.sync();
const syncNonAdmittingAffiliation=NonAdmittingAffiliation.sync();


export default { syncUser, syncAdmittingArrangements,syncNonAdmittingAffiliation};