// Requiring path to so we can use relative routes to our HTML files
const path = require("path");
var db = require("../models");
const sequelize = require("sequelize");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");
const { response } = require("express");

module.exports = function(app) {
  app.get("/", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/calendar",isAuthenticated, function(req, res) {
    console.log(db)
    db.birthday.findAll({
    }).then(function(hbsObject) {
      console.log(hbsObject)
      res.render("index", hbsObject);
    });
  });

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, (req, res) => {
    res.render("members");
  });

  app.get("/api/birthday/:month", (req, res) => {
    console.log("this is the user info")
    console.log(req.user)

    db.birthday.findAll({

      where: sequelize.where(sequelize.fn("month", sequelize.col("date")), req.params.month)
      // where: {sequelize.where(sequelize.fn("month", sequelize.col("date")), req.params.month),UserId:req.user.id}
      
    }).then(response => {
      
    let months = {
      1: "January",
      2: "February",
      3: "March",
      4: "April",
      5: "May",
      6: "June",
      7: "July",
      8: "August",
      9: "September",
      10: "October",
      11: "November",
      12: "December"
    }

if(response.length) {
  console.log("date: "+response[0].date)
    let hbsObj = {
      data: response.map(bday => {
        let temp = bday.date.getDay();
        return {firstname: bday.firstname, lastname:bday.lastname, date: temp, gift: bday.gift}}),
      displayBirthdays: response.length ? true: false,
      month: months[req.params.month],
      day: req.params.day
    }
    console.log(hbsObj)
    res.render("members", hbsObj);
}
    
    }); 
  });
};
