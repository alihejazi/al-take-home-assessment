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

  const users = [
    {
      username: 'jdoe',
      name: 'John',
      surname: 'Doe',
    },
    {
      username: 'ssmith',
      name: 'Sarah',
      surname: 'Smith',
    },
    {
      username: 'asimons',
      name: 'Amanda',
      surname: 'Simons',
    }
  ]

  const initialValues: { name?: string; quantities?: string; username?: string } = {
    username: users[0].username
  };

  return (
    <Flex w="full">
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          if (!values || !values.name || !values.username || !values.quantities) {
            alert('Please ensure all values are populated!')
            actions.setSubmitting(false);
            return;
          }
          fetch(`http://localhost:3001/inventory/${values.name}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ quantities: values.quantities, username: values.username }),
          })
            .then((res) => {
              if (res.status !== 200) {
                throw new Error()
              }
              else return res.json()
            })
            .then((data) => {
              dispatch({
                type: "UPDATE",
                item: data,
              });
            })
            .catch(err => alert('Error occured! Please contact support'))
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
                <div>
                  <FormLabel>User</FormLabel>
                  <Field as="select" name="username">
                    { users.map((user, key) =>
                      <option value={user.username} key={key}>{`${user.name} ${user.surname}`}
                      </option>
                    ) }
                  </Field>
                </div>
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
