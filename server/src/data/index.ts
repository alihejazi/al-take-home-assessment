const randomSeconds = (seconds: number) =>
  Math.floor(Math.random() * (seconds * 1000)) + 500;

export const InventoryDB = () => {
  interface ItemsToQuantitiesMapper {
    [key: string]: number
  }

  const inventory: Record<string, ItemsToQuantitiesMapper> = {};

  return {
    set: async (username: string, item: string, quantities: number[]) => {
      // add some fake random latency
      await new Promise((res) => setTimeout(res, randomSeconds(1)));

      const quantitiesTotal = quantities.reduce((acc, q) => acc + q, 0);

      let userItems: ItemsToQuantitiesMapper = inventory[username];

      if (userItems && userItems[item]) {
        userItems[item] += quantitiesTotal;
      }

      else {
        if (!userItems) {
          userItems = {}
        }
        userItems[item] = quantitiesTotal;
      }

      inventory[username] = userItems;
    },

    get: (username: string, item: string) => inventory[username][item],
  };
};
