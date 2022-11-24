import Spots from "./spots";

export default function Home({ spots, setSpot }) {
  return (
    <>
      <Spots spots={spots} setSpot={setSpot} />
    </>
  );
}
