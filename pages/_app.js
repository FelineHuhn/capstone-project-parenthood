import GlobalStyles from "../components/GlobalStyles";
import { useLocalStorage } from "../helpers/hooks";
import { spotsList } from "../helpers/mockSpots";
import Layout from "../components/Layout";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [spots, setSpot] = useLocalStorage("spots", spotsList);
  const [title, setTitle] = useState("");
  return (
    <>
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
