let express = require('express');
let router = express.Router();
let indexcontroller = require('../controller/index');
/* GET home page. */
router.get('/',indexcontroller.displayHomePage);

/* GET home page. */
router.get('/home', indexcontroller.displayHomePage);

/* GET about page. */
router.get('/about', indexcontroller.displayAboutPage);

/* GET products page. */
router.get('/products', indexcontroller.displayProductPage);

/* GET services page. */
router.get('/services', indexcontroller.displayServicesPage);

/* GET contact page. */
router.get('/contact', indexcontroller.displayContactPage);

module.exports = router;
