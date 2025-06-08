const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use((req, res, next) => {
  res.locals.currentYear = new Date().getFullYear();
  next();
});


app.get('/', (req, res) => res.render('home'));
app.get('/about', (req, res) => res.render('about'));
app.get('/thoughts', (req, res) => res.render('thoughts'));
app.get('/resources', (req, res) => res.render('resources'));
app.get('/get-involved', (req, res) => res.render('get-involved'));
app.get('/contact', (req, res) => res.render('contact'));

app.listen(PORT, () => {
  console.log(`🌍 Server is running at http://localhost:${PORT}`);
});

