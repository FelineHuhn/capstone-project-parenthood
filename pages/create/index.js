import { nanoid } from "nanoid";
import SpotForm from "../../components/SpotForm";

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
      isFavorite: false,
    };

    setSpot((spots) => [newSpot, ...spots]);
  }

  return (
    <>
      <SpotForm addSpot={addSpot} />
    </>
  );
}
