const User = require('../models/userModels');
const bcrypt = require('bcrypt');

const createUser = async (req, res) => {
  // there should be a user object set on req
  if(!req.user) { throw new Error('User not found in request object') }
  // use that req.user object to create a user and save it to our Mongo instance.
  const user = new User(req.user);
  await user.save()
  res.json(user);
};

module.exports = {
  createUser
};
