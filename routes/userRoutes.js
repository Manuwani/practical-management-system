
import User from '../models/User.js';
import express from 'express';  
const router = express.Router();
import { authMiddleware, validateRole } from '../middleware/authMiddleware.js'; 

export const createuser=async (req, res) => {
    const { name, email, password, role } = req.body;

    const user = new User({ name, email, password, role });
    await user.save();

    res.json(user);
};

export const getALLusers = [
    authMiddleware,
    validateRole(['Admin']),
    async (req, res) => {
        try {
            const users = await User.find();
            res.json(users);
        } catch (error) {
            res.status(500).json({ message: 'Server error', error });
        }
    }
];

export const getAdmins = [
    authMiddleware,
    validateRole(['Admin']),
    async (req, res) => {
        try {
            const admins = await User.find({ role: 'Admin' });
            res.json(admins);
        } catch (error) {
            res.status(500).json({ message: 'Server error', error });
        }
    }
];
// Route for getting all students (Admins and Teachers can access this)
export const getStudents = [
    authMiddleware,
    validateRole(['Admin', 'Teacher']),
    async (req, res) => {
        try {
            const students = await User.find({ role: 'Student' });
            res.json(students);
        } catch (error) {
            res.status(500).json({ message: 'Server error', error });
        }
    }
];

// Route for getting all teachers (Only Admins can access this)
export const getTeachers = [
    authMiddleware,
    validateRole(['Admin']),
    async (req, res) => {
        try {
            const teachers = await User.find({ role: 'Teacher' });
            res.json(teachers);
        } catch (error) {
            res.status(500).json({ message: 'Server error', error });
        }
    }
];

export default User;
