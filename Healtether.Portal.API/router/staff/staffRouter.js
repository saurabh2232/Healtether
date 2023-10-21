import { Router } from "express";
import {
    GetStaffOverview,
    StaffUpsert,
 
} from "../../controllers/staffs/staffsController.js";

/**
 * @swagger
 * tags:
 *   name: Staff
 *   description: The  managing API
 * /upsert:
 *   post:
 *     summary: Insert or Update staff
 *     tags: [Staff]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/model/staffModel'
 *     responses:
 *       200:
 *         description: The created book.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/model/staffModel'
 *       500:
 *         description: Some server error
 *
 */
const staffRouter = Router();

staffRouter.post("/upsert", StaffUpsert);
staffRouter.get("/getstaffs",GetStaffOverview);

export default staffRouter;
