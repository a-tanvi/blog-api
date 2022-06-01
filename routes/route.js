const express = require('express');
const router = express.Router();
const { getAllBlogs, addBlog, getBlogById, deleteBlogs, updateBlog} = require('../controllers/Blog')
const {addReview, deleteReview} = require('../controllers/Review')


router.route('/').post(addBlog).get(getAllBlogs);

router.route('/:id').get(getBlogById).patch(updateBlog).delete(deleteBlogs);

router.route('/review').post(addReview);

router.route('/review/:id').delete(deleteReview);


module.exports = router;