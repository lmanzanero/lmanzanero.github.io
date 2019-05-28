const mongoose = require("mongoose");

exports.admin_login = (req, res, next ) => {
    res.json({msg: "Admin has logined in"});
}