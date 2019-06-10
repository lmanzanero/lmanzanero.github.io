const mongoose = require("mongoose");
const Admin = require('../models/Admin');

exports.admin_login = (req, res, next ) => {
    // res.json({msg: "Admin has logined in"});
    Admin.findOne({user: "lmanzanero"}, function(err, user) {
        res.send(user);
      });
}