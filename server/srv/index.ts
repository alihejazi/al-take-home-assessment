import cors from "cors";
import express from "express";
import { InventoryDB } from "./data";

const port = 3001;

const app = express();
const db = InventoryDB();

app.use(cors());
app.use(express.json());

app.post("/inventory/:name", async (req, res) => {
  const quantity = parseInt(req.body.quantity) as number;
  await db.set(req.params.name, quantity);

  return res.json({
    name: req.params.name,
    quantity: db.get(req.params.name),
  });
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
