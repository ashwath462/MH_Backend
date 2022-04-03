const {Router} = require('express');
const router = Router();

const User = require("../models/user");

router.post('/signup',signup_post = async (req, res) => {
    const {name, email,subject,message} = req.body;
    
      try {
        const user = await User.create({name, email,subject,message,date:new Date()});
      }
      catch(err) {
        const errors = handleErrors(err);
        res.status(400).json({ errors });
      }
});

module.exports = router;