import { render } from "@testing-library/react";
import { useContext } from "react";
import { InventoryContext } from "./inventory-provider";

const HelperComponent = () => {
  const { state } = useContext(InventoryContext);

  return Object.entries(state).map(([name, quantity], index) => (
    <div key={index}>
      <p data-testid={`name-${index}`}>{name}</p>
      <p data-testid={`quantity-${index}`}>{quantity}</p>
    </div>
  ));
};

describe("<InventoryProvider />", () => {
  test("provides expected InventoryProvider obj to child elements", () => {
    const state = { hello: 1, foo: 2 };

    const { getByTestId } = render(
      <InventoryContext.Provider value={{ state, dispatch: () => {} }}>
        <HelperComponent />
      </InventoryContext.Provider>
    );

    Object.entries(state).map(([name, quantity], index) => {
      expect(getByTestId(`name-${index}`).textContent).toEqual(name);
      expect(getByTestId(`quantity-${index}`).textContent).toEqual(
        quantity.toString()
      );
    });
  });
});
