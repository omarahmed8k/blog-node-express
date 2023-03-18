const Blog = require('./../models/blogModel');

const blog_index = (req, res) => {
    Blog.find().sort({ createdAt: -1 })
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status(404).send('Not Found');
        });
}

const blog_details = (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then((result) => res.send(result))
        .catch((err) =>
            res.status(404).send('Not Found')
        );
}

const blog_create_post = (req, res) => {
    Blog(req.body).save()
        .then((result) => res.send(result))
        .catch((err) =>
            res.status(404).send('Not Found')
        );
}

const blog_edit_put = (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndUpdate(id, req.body)
        .then((result) => res.send(result))
        .catch((err) =>
            res.status(404).send('Not Found')
        );
}

const blog_delete = (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
        .then((result) => res.send(result))
        .catch((err) =>
            res.status(404).send('Not Found')
        );
}



module.exports = {
    blog_index,
    blog_details,
    blog_create_post,
    blog_edit_put,
    blog_delete
}
