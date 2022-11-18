let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
const nba = require('../models/nba50');

//connect with nba model

let NBA = require('../models/nba50');
/* CRUD Operation */

module.exports.displayGameslist = (req,res,next)=>{
    NBA.find((err,nbalist)=>{
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('nba/list',{
                title:'NBA 50 point games in The Last 2 Seasons',
            NBAlist:nbalist
        })
        }
    });
}


module.exports.displayAddPage = (req,res,next)=>{
    res.render('nba/add',{title: 'Add Game'})

}

module.exports.processAddPage =(req,res,next)=>{
    let newgame = NBA({
        "name":req.body.name,
        "Points":req.body.Points,
        "date":req.body.date,
        "team":req.body.team,
        "against":req.body.against
    });
    NBA.create(newgame,(err,NBA)=>{
        if(err)
        {
            console.log(err)
            res.end(err);
        }
        else
        {
            res.redirect('/nba-list')
        }
    })
}
module.exports.displayEditPage = (req,res,next)=>{
    let id = req.params.id;
    NBA.findById(id,(err,nbaToEdit)=>{
        if(err)
        {
            console.log(err)
            res.end(err);
        }
        else
        {
            res.render('nba/edit', {title:'Edit Game',nba: nbaToEdit});
        }
    }) 
}
module.exports.ProcessEditPage = (req,res,next)=>{
    let id= req.params.id;
    let updateNBA = NBA({
        "_id":id,
        "name":req.body.name,
        "Points":req.body.Points,
        "date":req.body.date,
        "team":req.body.team,
        "against":req.body.against
    });
    NBA.updateOne({_id:id},updateNBA,(err)=>{
        if(err)
        {
            console.log(err)
            res.end(err);
        }
        else
        {
            res.redirect('/nba-list')
        }
    });
}

module.exports.performDelete = (req,res,next)=>{
    let id=req.params.id;
    NBA.deleteOne({_id:id},(err)=>{
        if(err)
        {
            console.log(err)
            res.end(err);
        }
        else
        {
            res.redirect('/nba-list')
        }
    })
}
