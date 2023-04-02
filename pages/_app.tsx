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
        <link rel="icon" type="image/svg+xml" href="/assets/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta name="og:title" content="Lil lemon"/>
        <meta name="og:description" content="This is the Little Lemon Restaurant"/>
        <meta name="og:image" content="/assets/logo.svg" />
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
