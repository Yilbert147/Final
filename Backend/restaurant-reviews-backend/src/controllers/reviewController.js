const Review = require('../models/review');

// Crear una reseña
const createReview = async (req, res) => {
    try {
        const { restaurantName, rating, comment } = req.body;
        const userId = req.user.id; 

        const newReview = new Review({ user: userId, restaurantName, rating, comment });
        await newReview.save();

        res.status(201).json({ message: 'Reseña creada con éxito', review: newReview });
    } catch (err) {
        res.status(500).json({ message: 'Error al crear la reseña', error: err.message });
    }
};


const getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find().populate('user', 'name email'); 
        res.status(200).json(reviews);
    } catch (err) {
        res.status(500).json({ message: 'Error al obtener las reseñas', error: err.message });
    }
};


const updateReview = async (req, res) => {
    try {
        const { id } = req.params; 
        const { restaurantName, rating, comment } = req.body;
        const userId = req.user.id; 

        const review = await Review.findById(id);

        if (!review) {
            return res.status(404).json({ message: 'Reseña no encontrada' });
        }

        if (review.user.toString() !== userId) {
            return res.status(403).json({ message: 'No tienes permiso para actualizar esta reseña' });
        }

        review.restaurantName = restaurantName || review.restaurantName;
        review.rating = rating || review.rating;
        review.comment = comment || review.comment;

        await review.save();
        res.status(200).json({ message: 'Reseña actualizada con éxito', review });
    } catch (err) {
        res.status(500).json({ message: 'Error al actualizar la reseña', error: err.message });
    }
};

// Eliminar una reseña
const deleteReview = async (req, res) => {
    try {
        const { id } = req.params; 
        const userId = req.user.id; 

        const review = await Review.findById(id);

        if (!review) {
            return res.status(404).json({ message: 'Reseña no encontrada' });
        }

        if (review.user.toString() !== userId) {
            return res.status(403).json({ message: 'No tienes permiso para eliminar esta reseña' });
        }

        await review.deleteOne();
        res.status(200).json({ message: 'Reseña eliminada con éxito' });
    } catch (err) {
        res.status(500).json({ message: 'Error al eliminar la reseña', error: err.message });
    }
};

module.exports = { createReview, getAllReviews, updateReview, deleteReview };
