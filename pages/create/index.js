import Link from "next/link";
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
      isChecked: false,
    };

    setSpot((spots) => [newSpot, ...spots]);
  }

  return (
    <>
      <h2>ParentHood Spot hinzufügen</h2>
      <SpotForm addSpot={addSpot} />
      <Link href={`/spots`}>Zurück</Link>
    </>
  );
}
