import Form from "@/components/form";
import ListItems from "@/components/list";
import { Box, Divider, Spacer } from "@chakra-ui/react";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Inventory keeper</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Box w="full" h="100vh" p={10}>
          {/* <Hello /> */}
          <Form />
          <Spacer h={10} />
          <Divider orientation="horizontal" />
          <Spacer h={10} />
          <ListItems />
        </Box>
      </main>
    </>
  );
}
