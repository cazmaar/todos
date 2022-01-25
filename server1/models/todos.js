import query from "../db/index.js";

// create a new todo
export async function createTodo(body) {
  const { priority, tasks } = body;
  console.log(priority);
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

// Delete a particular todo when its done
export async function deleteTodo(id) {
  console.log(id);
  const res = await query(
    "DELETE FROM todos WHERE id=$1 RETURNING *",
    [id]
  );
  return res.rows;
}
