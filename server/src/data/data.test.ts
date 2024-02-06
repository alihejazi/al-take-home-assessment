import { InventoryDB } from ".";

describe("Storage", () => {
  it.concurrent("should add same items", async () => {
    const db = InventoryDB();
    const username = "testuser";

    await db.set(username, "a", [1]);
    await db.set(username, "a", [1]);
    await db.set(username, "a", [2]);

    expect(db.get(username, "a")).toEqual(4);
  });

  it.concurrent("should add with multiple quantities", async () => {
    const db = InventoryDB();
    const username = "testuser";

    await db.set(username, "a", [1]);
    await db.set(username, "a", [1, 1]);
    await db.set(username, "a", [2, 2, 2]);

    expect(db.get(username, "a")).toEqual(9);
  });

  it.concurrent("should add different items separately", async () => {
    const db = InventoryDB();
    const username = "testuser";

    await db.set(username, "a", [1]);
    await db.set(username, "b", [1]);
    await db.set(username, "b", [2, 2]);

    expect(db.get(username, "a")).toEqual(1);
    expect(db.get(username, "b")).toEqual(5);
  });

  it.concurrent(
    "should return the same quantity is additions add to the same number",
    async () => {
      const db = InventoryDB();
      const db1 = InventoryDB();
      const username = "testuser";

      await db.set(username, "a", [1]);
      await db.set(username, "a", [2, 2]);
      await db1.set(username, "a", [5]);

      expect(db.get(username,"a")).toEqual(db1.get(username, "a"));
    }
  );
});
