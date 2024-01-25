const randomSeconds = (seconds: number) =>
  Math.floor(Math.random() * (seconds * 1000)) + 500;

export const InventoryDB = () => {
  const inventory: Record<string, number | undefined> = {};

  return {
    set: async (item: string, quantity: number) => {
      // add some fake random latency
      await new Promise((res) => setTimeout(res, randomSeconds(2)));

      inventory[item] = (inventory[item] ?? 0) + quantity;
    },

    get: (item: string) => inventory[item],
  };
};
