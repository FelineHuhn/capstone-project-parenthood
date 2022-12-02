import GlobalStyles from "../components/GlobalStyles";
import { useLocalStorage } from "../helpers/hooks";
import { spotsList } from "../helpers/mockSpots";
import Layout from "../components/Layout";
import { useState } from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const [spots, setSpot] = useLocalStorage("spots", spotsList);
  const [title, setTitle] = useState("");
  return (
    <>
      <Head>
        <title>ParentHood</title>
      </Head>
      <Layout title={title}>
        <GlobalStyles />
        <Component
          {...pageProps}
          spots={spots}
          setSpot={setSpot}
          setTitle={setTitle}
        />
      </Layout>
    </>
  );
}

export default MyApp;
