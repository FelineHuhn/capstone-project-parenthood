import { PHASE_PRODUCTION_BUILD } from "next/dist/shared/lib/constants";
import styled from "styled-components";
import SpotCard from "../components/SpotCard";
import spots from "../helpers/mockSpots";
// import mock

export default function Home() {
  return (
    <>
      <Headline>ParentHood Spots</Headline>
      <SpotList>
        {spots
          ?.sort((a, b) => a.name.localeCompare(b.name))
          ?.map((spot) => (
            <SpotCard spot={spot} key={spot.name}></SpotCard>
          ))}
      </SpotList>
    </>
  );
}

// return (
//     <>
//       <h1>Produkte</h1>
//       <h2>Liste aller Produkte</h2>
//       <GridList>
//         {data?.map((product) => (
//           <li key={product.id}>
//             <Anchor href={`/products/${product.id}`}>{product.name}</Anchor>
//           </li>
//         ))}
//       </GridList>
//       <Anchor href={`/products/new`}>Neues Produkt erstellen.</Anchor>
//     </>
//   );

const Headline = styled.h1`
  text-align: center;
`;

const SpotList = styled.ul`
  list-style: none;
`;
