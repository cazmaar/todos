import express from "express";
import { createTodo, getAllTodos } from "../models/todos.js";

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

export default router;
