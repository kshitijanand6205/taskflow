const taskService = require('../services/task.service');

exports.createTask = async (req, res) => {
  const task = await taskService.createTask(req.user.id, req.body.title);
  res.json(task);
};

exports.getTasks = async (req, res) => {
  const tasks = await taskService.getTasks(req.user.id);
  res.json(tasks);
};

exports.updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;

  const task = await taskService.updateTask(
    req.user.id,
    id,
    title,
    completed
  );

  res.json(task);
};

exports.deleteTask = async (req, res) => {
  await taskService.deleteTask(req.user.id, req.params.id);
  res.json({ message: 'Task deleted successfully' });
};
