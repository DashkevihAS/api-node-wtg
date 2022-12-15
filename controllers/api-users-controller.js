const User = require('../models/user');

const handleError = (res, error) => {
  res.status(500).send(error.message);
};

const addUser = (req, res) => {
  const {
    birthdayDate,
    email,
    firstName,
    lastName,
    login,
    password,
    userRoleString,
  } = req.body;

  console.log('req.body: ', req.body);
  const user = new User({
    birthdayDate,
    email,
    firstName,
    lastName,
    login,
    password,
    userRoleString,
  });
  user
    .save()
    .then((user) => res.status(200).json(user))
    .catch((err) => handleError(res, err));
};

const authUser = (req, res) => {
  const { login, password } = req.body;

  User.find({ login, password }, { login, password })
    .then((user) => {
      if (!user.length) {
        return res.status(200).send({ error: 'Неверный логин или пороль ' });
      }
      return res.status(200).json(user);
    })
    .catch((err) => handleError(res, err));
};

module.exports = {
  addUser,
  authUser,
};
