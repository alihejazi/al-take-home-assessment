import { InventoryContext } from "@/context/InventoryProvider";
import { Box, Flex, SimpleGrid, Spacer, Text } from "@chakra-ui/react";
import { useContext } from "react";

export default function ListItems() {
  const { state } = useContext(InventoryContext);
  return (
    <Box w={"full"}>
      <Text as="b" mb={20}>
        Inventory
      </Text>
      <Spacer h={5} />
      <SimpleGrid columns={1} spacing={1} w={"full"}>
        {Object.entries(state).map(([name, quantity]) => (
          <Flex bg="lightgray" key={name} w={"full"}>
            <Text as="u" flex={1}>
              {name}
            </Text>
            <Text ml={20} flex={9}>
              {quantity}
            </Text>
          </Flex>
        ))}
      </SimpleGrid>
    </Box>
  );
}
