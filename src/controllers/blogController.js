const Blog = require('./../models/blogModel');

const blog_index = (req, res) => {
    Blog.find().sort({ createdAt: -1 })
        .then((result) => {
            res.render('blogs/blogs', { title: 'All Blogs', blogs: result });
        })
        .catch((err) => {
            res.status(404).render('404', { title: 'Blog not found' })
        });
}

const blog_details = (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then((result) => res.render('blogs/blog', { title: 'Blog', blog: result }))
        .catch((err) =>
            res.status(404).render('404', { title: 'Blog not found' })
        );
}

const blog_create_get = (req, res) => {
    res.render('blogs/add-blog', { title: 'Create a new blog' });
}

const blog_create_post = (req, res) => {
    Blog(req.body).save()
        .then((result) => res.redirect('/blogs'))
        .catch((err) =>
            res.status(404).render('404', { title: 'Blog not found' })
        );
}

const blog_edit_get = (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then((result) => res.render('blogs/edit-blog', { title: 'Edit Blog', blog: result }))
        .catch((err) =>
            res.status(404).render('404', { title: 'Blog not found' })
        );
}

const blog_edit_put = (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndUpdate(id, req.body)
        .then((result) => res.json({ redirect: '/blogs' }))
        .catch((err) =>
            res.status(404).render('404', { title: 'Blog not found' })
        );
}

const blog_delete = (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
        .then((result) => res.json({ redirect: '/blogs' }))
        .catch((err) =>
            res.status(404).render('404', { title: 'Blog not found' })
        );
}



module.exports = {
    blog_index,
    blog_details,
    blog_create_get,
    blog_create_post,
    blog_edit_get,
    blog_edit_put,
    blog_delete
}
