import GlobalStyles from "../components/GlobalStyles";
import { useLocalStorage } from "../helpers/hooks";
import { spotsList } from "../helpers/mockSpots";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  const [spots, setSpot] = useLocalStorage("spots", spotsList);
  return (
    <>
      <Layout>
        <GlobalStyles />
        <Component {...pageProps} spots={spots} setSpot={setSpot} />
      </Layout>
    </>
  );
}

export default MyApp;
