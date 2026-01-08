const pool = require('../config/db');

exports.createTask = async (userId, title) => {
  const task = await pool.query(
    'INSERT INTO tasks (title, user_id) VALUES ($1,$2) RETURNING *',
    [title, userId]
  );
  return task.rows[0];
};

exports.getTasks = async (userId) => {
  const tasks = await pool.query(
    'SELECT * FROM tasks WHERE user_id=$1',
    [userId]
  );
  return tasks.rows;
};

exports.updateTask = async (userId, taskId, title, completed) => {
  const task = await pool.query(
    `UPDATE tasks
     SET title=$1, completed=$2
     WHERE id=$3 AND user_id=$4
     RETURNING *`,
    [title, completed, taskId, userId]
  );

  return task.rows[0];
};

exports.deleteTask = async (userId, taskId) => {
  await pool.query(
    'DELETE FROM tasks WHERE id=$1 AND user_id=$2',
    [taskId, userId]
  );
};


