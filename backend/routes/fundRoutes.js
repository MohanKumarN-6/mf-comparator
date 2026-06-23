const express=require("express");
const router= express.Router();
const {getAllFunds}=require("../controllers/fundController")
router.get("/",getAllFunds)

module.exports=router;