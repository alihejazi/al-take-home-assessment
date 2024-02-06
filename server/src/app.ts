import cors from "cors";
import express from "express";
import { InventoryDB } from "./data";
import Utils from "./utils";

const app = express();
const db = InventoryDB();
const utils = new Utils();

app.use(cors());
app.use(express.json());

app.post("/inventory/:name", async (req, res) => {
  const quantities = req.body.quantities?.trim();
  const username = req.body.username?.trim();
  const itemName = req.params.name?.trim();

  // add some basic validation
  if (!quantities || !username || !itemName) {
    // use 'return' keyword so code doesn't continue running!
    return res.status(400).send({
      message: 'Invalid data!'
    })
  }

  if (!utils.validateQuantities(quantities)) {
    // use 'return' keyword so code doesn't continue running!
    return res.status(400).send({
      error: 'Invalid number(s) found in quantities!'
    });
  }

  const quantitiesNumberList = (quantities as string)
    .split(",")
    .map((q) => parseInt(q));
  
  await db.set(username, itemName, quantitiesNumberList);

  return res.json({
    name: req.params.name,
    quantity: db.get(username, itemName),
  });
});

export default app;
