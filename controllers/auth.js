const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const errorHandler = require('../utils/errorHandler');

const { User } = require('../database/models/index');

//  SIGN-UP
exports.signUp = async (req, res) => {
  const errors = await req.validation({
    email: 'required|string|email|unique:users',
    password: 'required|string',
    passwordConfirmation: 'required|string|as:password',
  });

  if (errors) return res.status(400).json({ errors });

  const data = req.only('email', 'password');

  const salt = bcrypt.genSaltSync(12);

  data.password = bcrypt.hashSync(req.body.password, salt);

  try {
    await User.create(data);

    return res.status(201).json({ success: true });
  } catch (error) {
    errorHandler(res, error);
  }
};

//  SIGN-IN
exports.signIn = async (req, res) => {
  const errors = await req.validation({
    email: `required|string|email|findRaw:SELECT * FROM users WHERE email = "${req.body.email}"`,
    password: 'required|string',
  });

  if (errors) return res.json({ errors });

  const user = await User.findOne({ where: { email: req.body.email } });

  const passwordCompare = await bcrypt.compareSync(
    req.body.password,
    user.password
  );

  if (!passwordCompare) return res.status(400).json();

  const access_token = await jwt.sign(
    { uid: user.id },
    process.env.JWT_SECRET_USER,
    { expiresIn: '1h' }
  );

  return res.json({ access_token: `Bearer ${access_token}` });
};
