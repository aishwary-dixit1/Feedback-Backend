import express from 'express';
import { submitFeedback, getFeedbacks } from '../controllers/feedbackController.js';
const feedbackRouter = express.Router();

feedbackRouter.post('/submit-feedback', submitFeedback);
feedbackRouter.get('/feedbacks', getFeedbacks);

export default feedbackRouter;