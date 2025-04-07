import mongoose from "mongoose";
import validator from "validator";

const feedbackSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true,
        },

        email: {
            type: String,
            required: true,
            lowercase: true, 
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