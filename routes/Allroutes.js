import{createuser} from "../routes/userRoutes.js"
import { getALLusers } from "../routes/userRoutes.js";
import { getAdmins } from "../routes/userRoutes.js";
import { getStudents } from "../routes/userRoutes.js";
import { getTeachers } from "../routes/userRoutes.js";
import { createPracticals } from "../routes/practicalRoutes.js";
import { getPracticals } from "../routes/practicalRoutes.js";
import { practicalEnroll } from "../routes/practicalRoutes.js";
import { subjectCreate } from "../routes/subjectRoutes.js";
import { getSubject } from "../routes/subjectRoutes.js";

import express from "express";
const router=express.Router()
router.get("/users/get",getALLusers)
router.get("/admins/get",getAdmins)
router.get("/students/get",getStudents)
router.get("/teachers/get",getTeachers)
router.get("/practicals/get",getPracticals)
router.get("/subjects/get",getSubject)
router.post("/practicals/create",createPracticals)
router.post("/practicals/enroll",practicalEnroll)
router.post("/users/create",createuser)
router.post("/subject/create",subjectCreate)

 export default router;