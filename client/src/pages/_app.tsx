import { InventoryProvider } from "@/context/InventoryProvider";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <InventoryProvider>
        <Component {...pageProps} />
      </InventoryProvider>
    </ChakraProvider>
  );
}
