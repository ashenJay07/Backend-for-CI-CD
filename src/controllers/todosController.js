const Todo = require("../models/todo");

let todos = [
  new Todo(1, "Buy groceries", false),
  new Todo(2, "Walk the dog", true),
];

// Get all todos
const getTodos = (req, res) => {
  res.json(todos);
};

// Get todo by ID
const getTodoById = (req, res) => {
  const { id } = req.params;
  const todo = todos.find((t) => t.id === parseInt(id));
  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }
  res.json(todo);
};

// Create a new todo
const createTodo = (req, res) => {
  const { title, completed } = req.body;
  const id = todos.length + 1;
  const newTodo = new Todo(id, title, completed);
  todos.push(newTodo);
  res.status(201).json(newTodo);
};

// Update todo by ID
const updateTodoById = (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;
  let todo = todos.find((t) => t.id === parseInt(id));
  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }
  todo.title = title;
  todo.completed = completed;
  res.json(todo);
};

// Delete todo by ID
const deleteTodoById = (req, res) => {
  const { id } = req.params;
  todos = todos.filter((t) => t.id !== parseInt(id));
  res.json({ message: "Todo deleted successfully" });
};

module.exports = {
  getTodos,
  getTodoById,
  createTodo,
  updateTodoById,
  deleteTodoById,
};
