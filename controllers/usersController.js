const User = require("../models/user");
module.exports.profile = function (req, res) {
  res.render("users.ejs", {
    title: "User Profile",
  });
};

// render the signup page
module.exports.signUp = function (req, res) {
  return res.render("user_signup", {
    title: "Codeal | Sign Up",
  });
};

// render the signin page
module.exports.signIn = function (req, res) {
  return res.render("user_signin", {
    title: "Codeal | Sign In",
  });
};

// get signup data
module.exports.create = function (req, res) {
  if (req.body.password != req.body.confirm_password) {
    return res.redirect("back");
  }
  User.findOne({ email: req.body.email }, function (err, user) {
    if (err) {
      console.log("Error in finding the user");
      return;
    }
    if (!user) {
      User.create(req.body, function (err, user) {
        if (err) {
          console.log("Error in creating user while signing up");
          return;
        }
        return res.redirect("/users/sign-in");
      });
    } else {
      return res.redirect("back");
    }
  });
};

// signin and create a session for the user
module.exports.createSession = function (req, res) {
  // ToDo
};
