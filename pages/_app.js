import GlobalStyles from "../components/GlobalStyles";
import { useLocalStorage } from "../helpers/hooks";
import { spotsList } from "../helpers/mockSpots";

function MyApp({ Component, pageProps }) {
  const [spots, setSpot] = useLocalStorage("spots", spotsList);
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} spots={spots} setSpot={setSpot} />
    </>
  );
}

export default MyApp;
