import { InventoryContext } from "@/context/inventory-provider";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Spacer,
} from "@chakra-ui/react";
import { Field, FieldInputProps, Form, Formik } from "formik";
import { useContext } from "react";

export default function InventoryForm() {
  const { dispatch } = useContext(InventoryContext);

  const initialValues: { name?: string; quantities?: string } = {};

  return (
    <Flex w="full">
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          fetch(`http://localhost:3001/inventory/${values.name}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ quantities: values.quantities }),
          })
            .then((res) => res.json())
            .then((data) => {
              dispatch({
                type: "UPDATE",
                item: data,
              });
            })
            .finally(() => actions.setSubmitting(false));
        }}
      >
        {(props) => (
          <Box w="full">
            <Form>
              <Flex w="full">
                <Field name="name">
                  {({ field }: { field: FieldInputProps<string> }) => (
                    <FormControl flex={1}>
                      <FormLabel>Item name</FormLabel>
                      <Input {...field} placeholder="name" />
                    </FormControl>
                  )}
                </Field>
                <Spacer flex={0.3} />
                <Field name="quantities" flex={1}>
                  {({ field }: { field: FieldInputProps<string> }) => (
                    <FormControl flex={3}>
                      <FormLabel>Inventory to add</FormLabel>
                      <Input
                        {...field}
                        placeholder="Comma separated inventory numbers"
                      />
                    </FormControl>
                  )}
                </Field>
              </Flex>
              <Spacer h={4} />
              <Button
                colorScheme="teal"
                type="submit"
                isLoading={props.isSubmitting}
              >
                Add
              </Button>
            </Form>
          </Box>
        )}
      </Formik>
    </Flex>
  );
}
