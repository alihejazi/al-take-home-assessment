const randomSeconds = (seconds: number) =>
  Math.floor(Math.random() * (seconds * 1000)) + 500;

export const InventoryDB = () => {
  const inventory: Record<string, number | undefined> = {};

  return {
    set: async (item: string, quantities: number[]) => {
      // add some fake random latency
      await new Promise((res) => setTimeout(res, randomSeconds(1)));

      const quantitiesTotal = quantities.reduce((acc, q) => acc + q, 0);
      inventory[item] = (inventory[item] ?? 0) + quantitiesTotal;
    },

    get: (item: string) => inventory[item],
  };
};
