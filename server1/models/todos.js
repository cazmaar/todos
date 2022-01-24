import query from "../db/index.js";

// create a new todo
export async function createTodo(body) {
  const { priority, tasks } = body;
  const res = await query(
    "INSERT INTO todos(priority, tasks) VALUES($1,$2) RETURNING *",
    [priority, tasks]
  );
  return res.rows;
}

// getAll todos
export async function getAllTodos() {
  const res = await query("SELECT * FROM todos");

  return res.rows;
}
