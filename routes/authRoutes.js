const {Router} = require('express');
const router = Router();
const User = require("../models/user");

router.post('/pp', (req, res) => {
  const {name, email,subject,comments} = req.body;
  // console.log(name,email,subject,comments);
  console.log(req.body);
  try {
      const user =  User.create({name,email,subject,comments, date:new Date()});
      res.status(201).json({ user: user._id,userdata:user });
  }
  catch(err) {
      res.status(400).json({ message:"Error found" });
      // console.log(err);
  }
});

module.exports = router;