const express = require('express');
const app = express();
const mongoose = require('mongoose');
app.set('view engine', 'ejs');
const articleRouter = require('./routes/articles');
const Article = require('./data/article')

const methodOverride = require('method-override')

app.use(express.urlencoded({ extended: false }))
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/myblog');

// Isko pehle use karna hai 
app.use(methodOverride('_method'))

// Isko upar vale k baad use karna hai 
app.use('/articles', articleRouter);

app.get('/', async (req, res)=>{
    const articles = await Article.find()
    res.render('articles/index_blog', {articles: articles});
})


app.listen(3000);