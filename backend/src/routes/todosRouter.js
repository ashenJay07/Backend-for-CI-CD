const express = require("express");
const router = express.Router();
const todosController = require("../controllers/todosController");

router.get("/", todosController.getTodos);
router.get("/:id", todosController.getTodoById);
router.post("/", todosController.createTodo);
router.put("/:id", todosController.updateTodoById);
router.delete("/:id", todosController.deleteTodoById);

module.exports = router;
