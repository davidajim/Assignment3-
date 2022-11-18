let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
const nba = require('../models/nba50');

//connect with nba model

let NBA = require('../models/nba50');
let nbacontroller =require('../controller/nba50');
/* CRUD Operation */
/* Read operation */
// Get Route for nba 50 point game list


router.get('/',nbacontroller.displayGameslist);

/* Add operation */
/* Get route for displying the add-page --  create operation */
router.get('/add',nbacontroller.displayAddPage);
/* Post route for processing the Add-Page*/

router.post('/add',nbacontroller.processAddPage);



/* Edit Operation*/
/* Get route for displaying the Edit Operation*/
router.get('/edit/:id',nbacontroller.displayEditPage);
/* Post route for processing the Edit Operation*/
router.post('/edit/:id',);



/* Delete Operation*/
/* Get to perform the delete Operation*/
router.get('/delete/:id',nbacontroller.performDelete);

/* Post route for processing the Add-Page*/
module.exports=router;