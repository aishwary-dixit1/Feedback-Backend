import mongoose from "mongoose";
import validate from "validator";

const feedbackSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true,
        },

        email: {
            type: String,
            lowercase: true,
            required: true, 
            unique: true,
            trim: true,
            validate(value) {
                if(!validator.isEmail(value)){
                    throw new Error("Email is not valid.");
                };
            }
        },

        message: {
            type: String,
            required: true,
        },

    },
    { timestamps : true }
);

const Feedback = mongoose.model("Feedback", feedbackSchema);

export default Feedback;