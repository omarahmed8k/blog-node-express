const express = require('express');
const router = express.Router();
const BlogController = require('../controllers/blogController');

router.get('/create', BlogController.blog_create_get);

router.get('/:id/edit', BlogController.blog_edit_get);

// Get all request
router.get('/', BlogController.blog_index);

// Get request
router.get('/:id', BlogController.blog_details);

// Post request
router.post('/', BlogController.blog_create_post);

// Put request
router.put('/:id', BlogController.blog_edit_put);

// Delete request
router.delete('/:id', BlogController.blog_delete);


module.exports = router;