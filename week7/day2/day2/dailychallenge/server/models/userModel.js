const db = require('../config/db');

async function createUser({ email, username, first_name, last_name, hashedPassword }) {
  return db.transaction(async (trx) => {
    const [user] = await trx('users')
      .insert({ email, username, first_name, last_name })
      .returning(['id', 'email', 'username', 'first_name', 'last_name']);

    await trx('hashpwd').insert({
      username: user.username,
      password: hashedPassword
    });

    return user;
  });
}

async function getUserByUsername(username) {
  return db('users').where({ username }).first();
}

async function getHashedPasswordByUsername(username) {
  return db('hashpwd').where({ username }).first();
}

async function getAllUsers() {
  return db('users').select('id', 'email', 'username', 'first_name', 'last_name');
}

async function getUserById(id) {
  return db('users')
    .where({ id })
    .select('id', 'email', 'username', 'first_name', 'last_name')
    .first();
}

async function updateUser(id, data) {
  const [updatedUser] = await db('users')
    .where({ id })
    .update(data)
    .returning(['id', 'email', 'username', 'first_name', 'last_name']);
  return updatedUser;
}

module.exports = {
  createUser,
  getUserByUsername,
  getHashedPasswordByUsername,
  getAllUsers,
  getUserById,
  updateUser
};