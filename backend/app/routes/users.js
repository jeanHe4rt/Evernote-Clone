var express = require('express');
var router = express.Router();
const User = require('../model/user');
// let hashPassword = require('../../service/hashPassword');

router.post('/register', async function(req, res) {
  const { name, email, password} = req.body;
  // const { password } = await hashPassword(req.body);
  // console.log(`Resposta do hashPassword ${password}`);
  const user = new User({ name, email, password });
  try {
    await user.save()
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({error: "Error registering new user please try again."});
  }
});
	

module.exports = router;
