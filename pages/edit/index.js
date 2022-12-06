import SpotForm from "../../components/SpotForm";
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
    information,
    isFavorite
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
      isFavorite,
    };

    const newSpotsList = spots.map((spot) => {
      if (spot.id === newSpot?.id) {
        return newSpot;
      }
      return spot;
    });
    setSpot(newSpotsList);
  }

  return <SpotForm isEditMode={true} spot={spotToEdit} editSpot={editSpot} />;
}
