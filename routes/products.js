const express = require('express');
const router = express.Router();

// clothing //
router.get('/clothing', (req, res, next) => {
    const clothing = [
    {
      title: "Black Jeans",
    },
    {
      title: "Armani Jeans",
    },
  ];
  res.render('products', {products: clothing});
});


// footwear //
router.get('/footwear', (req, res, next) => {
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

// accessories //
router.get('/accessories', (req, res, next) => {
  const accessories = [
    {
      title: 'Chanel bag'
    },
    {
      title: 'Hermes bag'
    }
  ];
  res.render('products', {products: accessories});
});

// underwear //
router.get('/underwear', (req, res, next) => {
  const underwear = [
  {
    title: 'Armani bra'
  },
  {
    title: 'ST bra'
  }
  ];
  res.render('products', {products: underwear});
});

// brands //
router.get('/brands', (req, res, next) => {
  const brands = [
    {
      title: "Hugo Boss"
    },
    {
      title: "Bikkembergs"
    }
  ];
  res.render('products', {products: brands});
});

module.exports = router;
