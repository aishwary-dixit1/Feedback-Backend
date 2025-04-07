import Feedback from '../models/feedback.model.js';

export const submitFeedback = async (req, res) => {
  try {
    const { fullName, email, message } = req.body;

    const newFeedback = new Feedback({
        fullName,
        email,
        message
    });
    await newFeedback.save();

    res.status(200).json({ message: 'Feedback saved', data: newFeedback});
  } catch (err) {
    console.log("error : ", err.message);
    res.status(500).json({ error: 'Failed to save feedback: ' });
  }
};

export const getFeedbacks = async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ createdAt: -1 });

    res.status(200).json(feedbacks);

  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch feedbacks' });
  }
};
