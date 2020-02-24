const express = require("express");
const router = express.Router();
const Item = require("../models/Item");

router.get('/',async(req,res)=>{
    let items = await Item.find();
    res.json({success:true, items});

});

// router.get("/cat")

router.post("/",async(req,res)=>{
    let {title,author} = req.body;
    let newItem = new Item({
        title,
        author
    });
    let data = await newItem.save();
    res.json({data});
});

module.exports = router;