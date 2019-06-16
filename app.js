const express = require('express');

const data = require('./data');

const app = express();
app.use('/static', express.static('public'));

app.set('view engine', 'pug');

const indexRoutes = require('./routes');
const aboutRoutes = require('./routes/about');
const projectsRoutes = require('./routes/projects');

app.use('/', indexRoutes);
app.use('/about', aboutRoutes);
app.use('/project', projectsRoutes);


app.get('/static', (req, res) => {
    res.render('layout');
})

app.use((req, res, next) => {
    const err = new Error('Page Not Found');
    err.status = 404;
    next(err);
  });

app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    res.render('error');
})

app.listen(3000, () => {
    console.log('Listening on port 3000. . .')
});



//- .cell
      //-   a(href='#')
      //-     img.thumbnail(src=projects[0].image_urls[0])
      //-     h5 Title