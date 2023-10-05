const Menu = require("../models/Menu");
const {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
  } = require("./verifyToken");
const router = require("express").Router();

//Create Menu
router.post("/", verifyTokenAndAdmin, async (req, res) => {
    const newMenu = new Menu(req.body);
  
    try {
      const savedMenu = await newMenu.save();
      res.status(200).json(savedMenu);
    } catch (err) {
      res.status(500).json(err);
    }
  });


//Get menu
router.get("/", async (req, res) => {
    try {
      const menu = await Menu.find({});
      res.status(200).json({menu});
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;