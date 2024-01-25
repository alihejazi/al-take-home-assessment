import { InventoryDB } from ".";

describe("Storage", () => {
  it.concurrent("should add same items", async () => {
    const db = InventoryDB();

    await db.set("a", 1);
    await db.set("a", 1);
    await db.set("a", 2);

    expect(db.get("a")).toEqual(4);
  });

  it.concurrent("should add different items separately", async () => {
    const db = InventoryDB();

    await db.set("a", 1);
    await db.set("b", 1);
    await db.set("b", 2);

    expect(db.get("a")).toEqual(1);
    expect(db.get("b")).toEqual(3);
  });

  it.concurrent(
    "should return the same quantity is additions add to the same number",
    async () => {
      const db = InventoryDB();
      const db1 = InventoryDB();

      await db.set("a", 1);
      await db.set("a", 2);
      await db1.set("a", 3);

      expect(db.get("a")).toEqual(db1.get("a"));
    }
  );
});
