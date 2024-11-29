const express = require('express');
const { createReview, getAllReviews, updateReview, deleteReview } = require('../controllers/reviewController');
const { verifyToken } = require('../middleware/authMiddleware'); 

const router = express.Router();


router.post('/', verifyToken, createReview); 
router.get('/', getAllReviews); 
router.put('/:id', verifyToken, updateReview); 
router.delete('/:id', verifyToken, deleteReview); 

module.exports = router;
