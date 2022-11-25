import SpotForm from "../../components/SpotForm";
import { StyledMain } from "../../components/Main";
import Link from "next/link";
import { useRouter } from "next/router";

export default function EditSpot({ spots, setSpot }) {
  const router = useRouter();
  const id = router.query.id;

  const spotToEdit = spots.find((spot) => spot.id.toString() === id);

  function editSpot(
    id,
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
      id,
      category,
      name,
      addresse,
      weathersuggestion,
      agesuggestion,
      tags: tagsArray,
      information,
      isChecked: false,
    };

    const newSpotsList = spots.map((spot) => {
      if (spot.id === newSpot?.id) {
        return newSpot;
      }
      return spot;
    });
    setSpot(newSpotsList);
  }

  return (
    <StyledMain>
      <h2>ParentHood Spot bearbeiten</h2>
      <SpotForm isEditMode={true} spot={spotToEdit} editSpot={editSpot} />
      <Link href={`/spots`}>Zurück</Link>
    </StyledMain>
  );
}