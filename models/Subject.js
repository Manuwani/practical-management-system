import mongoose from 'mongoose';

const subjectSchema = new mongoose.Schema({
    name: String,
    code: String,
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const Subject = mongoose.model('Subject', subjectSchema);
export default Subject;