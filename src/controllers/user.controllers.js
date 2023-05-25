require('dotenv').config();
const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const signup = (req, res, next) => {
  const saltRounds = 10;
  bcrypt
    .hash(req.body.password, saltRounds)
    .then((hash) => {
      const user = new User({
        email: req.body.email,
        password: hash,
      });
      user
        .save()
        .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};

const login = (req, res, next) => {
  const AUTH_TOKEN_ENCRYPTOR = process.env.AUTH_TOKEN_ENCRYPTOR;

  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        return res
          .status(401)
          .json({ message: 'Paire login/mot de passe incorrecte' });
      }
      bcrypt
        .compare(req.body.password, user.password)
        .then((valid) => {
          if (!valid) {
            return res
              .status(401)
              .json({ message: 'Paire login/mot de passe incorrecte' });
          }
          res.status(200).json({
            userId: user._id,
            token: jwt.sign({ userId: user._id }, AUTH_TOKEN_ENCRYPTOR, {
              expiresIn: '24h',
            }),
          });
        })
        .catch((error) => res.status(500).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};

module.exports = {
  signup,
  login,
};
