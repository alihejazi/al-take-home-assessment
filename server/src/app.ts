import cors from "cors";
import express from "express";
import { InventoryDB } from "./data";

const app = express();
const db = InventoryDB();

app.use(cors());
app.use(express.json());

app.post("/inventory/:name", async (req, res) => {
  const quantities = (req.body.quantities as string)
    .split(",")
    .map((q) => parseInt(q));

  await db.set(req.params.name, quantities);

  return res.json({
    name: req.params.name,
    quantity: db.get(req.params.name),
  });
});

export default app;
