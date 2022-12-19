const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { secret } = require('../config.js');
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

  // User.findOne({ login })
  //   .then((user) => {
  //     if (user) {
  //       return res
  //         .status(400)
  //         .json({ message: 'Пользователь с таким Login уже существует' });
  //     }
  //   })
  //   .catch((err) => handleError(res, err));

  // User.findOne({ email })
  //   .then((user) => {
  //     if (user) {
  //       return res
  //         .status(400)
  //         .json({ message: 'Пользователь с таким Email уже существует' });
  //     }
  //   })
  //   .catch((err) => handleError(res, err));

  const hashPassword = bcrypt.hashSync(password, 7);

  const user = new User({
    birthdayDate,
    email,
    firstName,
    lastName,
    login,
    password: hashPassword,
    userRoleString,
  });
  user
    .save()
    .then((user) => res.status(200).json(user))
    .catch((err) => handleError(res, err));
};

const generateAccessToken = (id, login) => {
  const payload = {
    id,
    login,
  };
  return jwt.sign(payload, secret, { expiresIn: '24' });
};

const authUser = (req, res) => {
  const { login, password } = req.body;

  User.findOne({ login })
    .then((user) => {
      if (!user) {
        return res
          .status(400)
          .json({ message: `Пользователь ${login} не найден` });
      }
      const validPassword = bcrypt.compareSync(password, user.password);

      if (!validPassword) {
        return res.status(400).json({ message: `Введен не верный пароль` });
      }
      const token = generateAccessToken(user._id, user.login);
      console.log('token: ', token);
      return res.status(200).json({ login: user.login, token });
    })
    .catch((err) => handleError(res, err));
};

module.exports = {
  addUser,
  authUser,
};
