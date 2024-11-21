import express from 'express';  
const router = express.Router();
import { authMiddleware, validateRole } from '../middleware/authMiddleware.js'; 

import Subject from "../models/Subject.js"

export const subjectCreate = [
    authMiddleware,
    validateRole(['Admin']),
    async (req, res) => {
        try {
            const { name, code } = req.body;

            const subject = new Subject({
                name,
                code,
                createdBy: req.user._id, 
            });

            await subject.save();
            res.json(subject);
        } catch (error) {
            res.status(500).json({ message: 'Server error', error });
        }
    }
];

export const getSubject = [
    authMiddleware,
    async (req, res) => {
        try {
            const subjects = await Subject.find();
            res.json(subjects);
        } catch (error) {
            res.status(500).json({ message: 'Server error', error });
        }
    }
];
export default Subject;
