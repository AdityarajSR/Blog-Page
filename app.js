const express = require('express');
const app = express();
const mongoose = require('mongoose');
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }))
const articleRouter = require('./routes/articles');
const Article = require('./data/article')

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/myblog');


app.use('/articles', articleRouter);

app.get('/', async (req, res)=>{
    const articles = await Article.find()
    res.render('articles/index_blog', {articles: articles});
})


app.listen(3000);