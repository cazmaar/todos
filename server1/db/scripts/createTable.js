import query from "../index.js";

const sqlString = "CREATE TABLE IF NOT EXISTS todos(id SERIAL PRIMARY KEY, priority TEXT, tasks TEXT)";

async function createTable() {
  const res = await query(sqlString);
  console.log(res);
}

createTable()