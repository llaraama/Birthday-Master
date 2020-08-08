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
    db.birthday.findAll({

      where: sequelize.where(sequelize.fn("month", sequelize.col("date")), req.params.month)
      
    }).then(response => {
      // console.log(response[0].firstname);
    // var bdays = [];
    // bdays.push(response);
    let months = {
      1: "january",
      2: "February",
      12: "December"
    }
    let hbsObj = {
      data: response.map(bday => {return {firstname: bday.firstname, lastname:bday.lastname, date: bday.date}}),
      displayBirthdays: response.length ? true: false,
      month: months[req.params.month]
    }
    console.log(hbsObj)
    res.render("members", hbsObj);
    }
    ) 
  });
};
