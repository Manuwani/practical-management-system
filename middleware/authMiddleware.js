import User from '../models/User.js';
export const authMiddleware = async (req, res, next) => {
    const { email } = req.body;  

    if (!email) {
        return res.status(401).json({ message: 'Unauthorized: Email not provided' });
    }
    try {
        const user = await User.findOne({ email });  
        if (!user) {
            return res.status(401).json({ message: 'Unauthorized: Invalid Email' });
        }
        req.user = user;  
        next();  
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Server error' });
    }
};
export const validateRole = (roles) => {
    return (req, res, next) => {
        console.log('Role Validation');
        next();
    };
};
