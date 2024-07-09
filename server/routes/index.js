import express from "express";
import userRouter from "./AdmittingPrivilegesRoutes.js";
import admittingRouter from "./AdmittingArrangentsRoutes.js";
import nonAdmittingRouter from "./NonAdmittingAffiliationRoutes.js";



const router=express.Router()

router.use('/user',userRouter)
router.use('/admittingArrangement',admittingRouter)
router.use('/non-admitting-affiliations', nonAdmittingRouter);

export default router

