const mongoose = require("mongoose");
const User = require("../models/Admin");

exports.admin_login = (req, res, next ) => { 
  res.json({msg: "Admin api here"}); 
  //Need to find admin users from database
}