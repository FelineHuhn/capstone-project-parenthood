import { nanoid } from "nanoid";
import SpotForm from "../../components/SpotForm";
import Header from "../../components/Header";

export default function CreateSpot({ setSpot }) {
  function addSpot(
    category,
    name,
    addresse,
    weathersuggestion,
    agesuggestion,
    tags,
    information
  ) {
    const tagsArray = tags.split(", ");
    const newSpot = {
      id: nanoid(),
      category,
      name,
      addresse,
      weathersuggestion,
      agesuggestion,
      tags: tagsArray,
      information,
      isChecked: false,
    };

    setSpot((spots) => [newSpot, ...spots]);
  }

  return (
    <>
      <Header>ParentHood Spot erstellen</Header>
      <SpotForm addSpot={addSpot} />
    </>
  );
}
