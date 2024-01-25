import { PropsWithChildren, createContext, useReducer } from "react";

type ContextType = Record<string, number>;
// const InventoryContext = createContext<ContextType>({});
const InventoryContext = createContext<{
  state: Record<string, number>;
  dispatch: React.Dispatch<any>;
}>({
  state: {},
  dispatch: () => null,
});

type Action = { type: "UPDATE"; item: { name: string; quantity: number } };

const InventoryReducer = (state: ContextType, action: Action) => {
  console.log(action.type);
  switch (action.type) {
    case "UPDATE":
      return {
        ...state,
        [action.item.name]: action.item.quantity,
      };
    default:
      return state;
  }
};

const InventoryProvider = ({ children }: PropsWithChildren<{}>) => {
  const [state, dispatch] = useReducer(InventoryReducer, {});

  return (
    <InventoryContext.Provider value={{ state, dispatch }}>
      {children}
    </InventoryContext.Provider>
  );
};

export { InventoryContext, InventoryProvider };

// export const ThemeProvider = ({ children }: PropsWithChildren<{}>) => {
//   const [theme, setTheme] = useState<ContextType["theme"]>({});

//   return (
//     <ThemeContext.Provider value={{ theme, setTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export const useThemeContext = () => {
//   const context = useContext(ThemeContext);

//   if (!context) {
//     throw new Error("useThemeContext must be used inside the ThemeProvider");
//   }

//   return context;
// };
