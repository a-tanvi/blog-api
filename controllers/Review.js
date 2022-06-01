const Review = require('../models/review');

const addReview = async (req, res) => {
  
    try {
      const review = await Review.create(req.body)
      res.status(201).json({ review })
    } catch (error) {
      res.status(500).json({ msg : error })
    }
    
  }

  
const deleteReview = async (req, res) => {

    try {
      const { id: reviewID } = req.params
    const review = await Review.findOneAndDelete({ _id: reviewID })
    if (!review) {
      return res.status(404).json({ msg : `No task found with id : ${reviewID}` })
    }
    res.status(200).json({ review })
    } catch (error) {
      res.status(500).json({ msg : error })
    }
    
  }


module.exports = { addReview, deleteReview}