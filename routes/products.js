var express = require('express');
var router = express.Router();

/* GET products page. */
router.get('/footwear', function(req, res, next) {
  const footwear = [
    {
      title: 'Blue shoes',
    },
    {
      title: 'Brown shoes',
    },
    
  ];
  res.render('products', { products: footwear });
});

module.exports = router;
