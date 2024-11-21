import { authMiddleware, validateRole } from '../middleware/authMiddleware.js'; 

import Practical from "../models/Practical.js"
import express from 'express';  
const router = express.Router();

export const createPracticals = [
    authMiddleware,
    validateRole(['Teacher']),
    async (req, res) => {
        try {
            const { subjectId, title, description } = req.body;

            const practical = new Practical({
                subjectId,
                title,
                description,
                createdBy: req.user._id,
            });

            await practical.save();
            res.json(practical);
        } catch (error) {
            res.status(500).json({ message: 'Server error', error });
        }
    }
];

// Get all Practicals
export const getPracticals = async (req, res) => {
    try {
        const practicals = await Practical.find();
        res.json(practicals);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Enroll in a practical (Student only)
export const practicalEnroll = [
    authMiddleware,
    validateRole(['Student']),
    async (req, res) => {
        try {
            const { practicalId } = req.body;

            const practical = await Practical.findById(practicalId);
            if (!practical) {
                return res.status(404).json({ message: 'Practical not found' });
            }

            practical.enrolledStudents.push(req.user._id);
            await practical.save();

            res.json(practical);
        } catch (error) {
            res.status(500).json({ message: 'Server error', error });
        }
    }
];
export default Practical;
