import express from "express";
import { createTodo, getAllTodos, deleteTodo } from "../models/todos.js";

const router = express.Router();

/* GET users listing. */
router.get("/", async function (req, res) {
  const newTodo = await getAllTodos();
  res.json({
    success: true,
    message: "It's done",
    payload: newTodo
  });
});

router.post("/", async function (req, res) {
  const newPost = await createTodo(req.body);
  res.json({
    success: true,
    message: "It's done",
    payload: newPost
  });
});
router.delete("/:id", async function (req, res) {
  const { id } = req.params;
  const deleted = await deleteTodo(id);
  res.json({
    success: true,
    message: "It's done",
    payload: deleted
  });
});

export default router;
