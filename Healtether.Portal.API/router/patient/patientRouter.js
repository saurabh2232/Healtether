import { Router } from "express";
import {
    GetPatientOverview,
    PatientUpsert,
 
} from "../../controllers/patients/patientsController.js";
const patientRouter = Router();

patientRouter.post("/upsert", PatientUpsert);
patientRouter.get("/getpatients",GetPatientOverview);

export default patientRouter;
