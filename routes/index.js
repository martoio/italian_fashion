const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', {title: 'Italian Fashion Shop. Main page'});
});

router.get('/men', (req, res, next) => {
  res.render('men', {title: "Italian Fashion Shop. Men's page"});
});

router.get('/children', (req, res, next) => {
  res.render('children', {title: "Italian Fashion Shop. Children's page"});
});

module.exports = router;
