import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { Layout } from "@/components";

import { StateContextProvider } from "@/contexts";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Little Lemon</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "light",
        }}
      >
        <StateContextProvider>
          <Notifications />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </StateContextProvider>
      </MantineProvider>
    </>
  );
}
