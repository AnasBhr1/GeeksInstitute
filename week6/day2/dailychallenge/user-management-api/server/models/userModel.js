const pool = require('../config/db');

const createUser = async (userData, hashedPwd) => {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const insertUserText = `
      INSERT INTO users (email, username, first_name, last_name)
      VALUES ($1, $2, $3, $4) RETURNING *`;
    const insertPwdText = `
      INSERT INTO hashpwd (username, password)
      VALUES ($1, $2)`;

    const userResult = await client.query(insertUserText, [
      userData.email,
      userData.username,
      userData.first_name,
      userData.last_name,
    ]);

    await client.query(insertPwdText, [userData.username, hashedPwd]);

    await client.query('COMMIT');
    return userResult.rows[0];
  } catch (error) {
    await client.query('ROLLBACK');
    throw error;
  } finally {
    client.release();
  }
};

const getUserByUsername = async (username) => {
  const result = await pool.query(
    'SELECT u.*, h.password FROM users u JOIN hashpwd h ON u.username = h.username WHERE u.username = $1',
    [username]
  );
  return result.rows[0];
};

const getAllUsers = async () => {
  const result = await pool.query('SELECT * FROM users');
  return result.rows;
};

const getUserById = async (id) => {
  const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
  return result.rows[0];
};

const updateUserById = async (id, data) => {
  const result = await pool.query(
    `UPDATE users SET email = $1, username = $2, first_name = $3, last_name = $4 WHERE id = $5 RETURNING *`,
    [data.email, data.username, data.first_name, data.last_name, id]
  );
  return result.rows[0];
};

module.exports = {
  createUser,
  getUserByUsername,
  getAllUsers,
  getUserById,
  updateUserById,
};
