import express from "express";
import { 
    getData,
    createData,
    getDataById,
    updateData,
    deleteData
 } from "../controller/ParticipantsController.js";

const router = express.Router();

router.get('/', getData);
router.get('/:id', getDataById);
router.post('/', createData);
router.patch('/:id', updateData);
router.delete('/:id', deleteData);

export default router;