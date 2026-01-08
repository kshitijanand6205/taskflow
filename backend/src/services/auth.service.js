const pool = require('../config/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async ({ name, email, password }) => {
  const hashedPassword = await bcrypt.hash(password, 10);

  await pool.query(
    'INSERT INTO users (name, email, password) VALUES ($1,$2,$3)',
    [name, email, hashedPassword]
  );

  return { message: 'User registered successfully' };
};

exports.login = async ({ email, password }) => {
  const user = await pool.query(
    'SELECT * FROM users WHERE email=$1',
    [email]
  );

  if (user.rows.length === 0) {
    return { error: 'User not found' };
  }

  const valid = await bcrypt.compare(password, user.rows[0].password);
  if (!valid) {
    return { error: 'Invalid password' };
  }

  const token = jwt.sign(
    { id: user.rows[0].id },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );

  return { token };
};
