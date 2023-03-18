const express = require('express');
const morgan = require('morgan');
const blogRoutes = require('./src/routes/blogRoutes');
const pagesRoutes = require('./src/routes/pagesRoutes');

const app = express();
const port = 3000;

const uri = "mongodb+srv://omarahmed8k:Meca2020@blog.gm29vgh.mongodb.net/blogs?retryWrites=true&w=majority";

const mongoose = require('mongoose');
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(port))
    .catch((err) => console.log(err));

app.set('view engine', 'ejs');
app.set('views', 'src/views');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use(morgan('dev'));

app.use(pagesRoutes);
app.use('/blogs', blogRoutes);


app.use((req, res) => res.status(404).render('404', { title: '404' }));