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

  it.concurrent(
    "should add same item to DIFFERENT users separately",
    async () => {
      const db = InventoryDB();
      const username1 = "testuser1";
      const username2 = "testuser2";

      await db.set(username1, "a", [1]);
      await db.set(username2, "a", [2, 2]);

      expect(db.get(username1,"a")).toEqual(1);
      expect(db.get(username2,"a")).toEqual(4);
    }
  );

  it.concurrent(
    "should add same item to DIFFERENT users separately, and calculate collective quantities correctly",
    async () => {
      const db = InventoryDB();
      const username1 = "testuser1";
      const username2 = "testuser2";

      await db.set(username1, "a", [1]);
      await db.set(username2, "a", [2, 2]);

      await db.set(username1, "a", [3, 8]);
      await db.set(username2, "a", [1, 5]);

      await db.set(username1, "a", [2, 9]);
      await db.set(username2, "a", [7, 4]);

      expect(db.get(username1,"a")).toEqual(1 + 3 + 8 + 2 + 9);
      expect(db.get(username2,"a")).toEqual(2 + 2 + 1 + 5 + 7 + 4);
    }
  );
});
