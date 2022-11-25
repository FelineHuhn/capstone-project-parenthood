import styled from "styled-components";
import { Button } from "./Button";
import { formCategoryOptions } from "../helpers/formCategoryOptions";
import { useRouter } from "next/router";
import Link from "next/link";

export default function SpotForm({ addSpot, spot, editSpot, isEditMode }) {
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const {
      good_weather,
      moderate_weather,
      bad_weather,
      children_under_1,
      children_1_to_3,
      children_3_to_6,
      children_6_to_9,
      children_9_to_12,
      teenager,
      category,
      name,
      addresse,
      tags,
      information,
    } = Object.fromEntries(formData);

    const weatherArray = [good_weather, moderate_weather, bad_weather];

    const ageArray = [
      children_under_1,
      children_1_to_3,
      children_3_to_6,
      children_6_to_9,
      children_9_to_12,
      teenager,
    ];

    if (isEditMode) {
      editSpot(
        spot.id,
        category,
        name.trim(),
        addresse.trim(),
        weatherArray,
        ageArray,
        tags.trim(),
        information.trim()
      );
      router.back();
    } else {
      addSpot(
        category,
        name.trim(),
        addresse.trim(),
        weatherArray,
        ageArray,
        tags.trim(),
        information.trim()
      );
      router.back();
    }

    event.target.reset();
  }

  return (
    <CreateSection>
      <Link href={`/`}>
        <BackSVG
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
        </BackSVG>
      </Link>
      <CreateForm onSubmit={handleSubmit}>
        <FormLabels htmlFor="category">Kategorie*</FormLabels>
        <select
          defaultValue={isEditMode ? spot?.category : ""}
          id="category"
          name="category"
          required
        >
          <option value="">--Bitte eine Kategorie auswählen--</option>
          {formCategoryOptions.map((optionEntry) => (
            <option key={optionEntry} value={optionEntry}>
              {optionEntry}
            </option>
          ))}
        </select>
        <FormLabels htmlFor="name">Name*</FormLabels>
        <input
          defaultValue={isEditMode ? spot?.name : ""}
          id="name"
          name="name"
          type="text"
          pattern=".*[\S]+.*"
          required
        />
        <FormLabels htmlFor="addresse">Adresse*</FormLabels>
        <input
          id="addresse"
          name="addresse"
          type="text"
          pattern=".*[\S]+.*"
          defaultValue={isEditMode ? spot?.link : ""}
          required
        />
        <Checkbox>
          <Legend>Wetterempfehlung</Legend>
          <div>
            <input
              defaultChecked={
                isEditMode && spot?.weathersuggestion[0]?.length > 0
              }
              id="good_weather"
              name="good_weather"
              type="checkbox"
              value="bei gutem Wetter"
            />
            <label htmlFor="weathersuggestion">bei gutem Wetter</label>
          </div>
          <div>
            <input
              defaultChecked={
                isEditMode && spot?.weathersuggestion[1]?.length > 0
              }
              id="moderate_weather"
              name="moderate_weather"
              type="checkbox"
              value="bei mäßigem Wetter"
            />
            <label htmlFor="weathersuggestion">bei mäßigem Wetter</label>
          </div>
          <div>
            <input
              defaultChecked={
                isEditMode && spot?.weathersuggestion[2]?.length > 0
              }
              id="bad_weather"
              name="bad_weather"
              type="checkbox"
              value="bei schlechtem Wetter"
            />
            <label htmlFor="weathersuggestion">bei schlechtem Wetter</label>
          </div>
        </Checkbox>
        <Checkbox>
          <Legend>Altersempfehlung</Legend>
          <div>
            <input
              defaultChecked={isEditMode && spot?.agesuggestion[0]?.length > 0}
              id="children_under_1"
              name="children_under_1"
              type="checkbox"
              value="Kinder unter 1 Jahr"
            />
            <label htmlFor="agesuggestion">Kinder unter 1 Jahr</label>
          </div>
          <div>
            <input
              defaultChecked={isEditMode && spot?.agesuggestion[1]?.length > 0}
              id="children_1_to_3"
              name="children_1_to_3"
              type="checkbox"
              value="Kinder 1 - 3 Jahre"
            />
            <label htmlFor="agesuggestion">Kinder 1 - 3 Jahre</label>
          </div>
          <div>
            <input
              defaultChecked={isEditMode && spot?.agesuggestion[2]?.length > 0}
              id="children_3_to_6"
              name="children_3_to_6"
              type="checkbox"
              value="Kinder 3 - 6 Jahre"
            />
            <label htmlFor="agesuggestion">Kinder 3 - 6 Jahre</label>
          </div>
          <div>
            <input
              defaultChecked={isEditMode && spot?.agesuggestion[3]?.length > 0}
              id="children_6_to_9"
              name="children_6_to_9"
              type="checkbox"
              value="Kinder 6 - 9 Jahre"
            />
            <label htmlFor="agesuggestion">Kinder 6 - 9 Jahre</label>
          </div>
          <div>
            <input
              defaultChecked={isEditMode && spot?.agesuggestion[4]?.length > 0}
              id="children_9_to_12"
              name="children_9_to_12"
              type="checkbox"
              value="Kinder 9 - 12 Jahre"
            />
            <label htmlFor="agesuggestion">Kinder 9 - 12 Jahre</label>
          </div>
          <div>
            <input
              defaultChecked={isEditMode && spot?.agesuggestion[5]?.length > 0}
              id="teenager"
              name="teenager"
              type="checkbox"
              value="Teenager"
            />
            <label htmlFor="agesuggestion">Teenager</label>
          </div>
        </Checkbox>
        <FormLabels htmlFor="tags">Tags (mit Komma trennen)</FormLabels>
        <input
          defaultValue={isEditMode ? spot?.tags.join(", ") : ""}
          id="tags"
          name="tags"
          type="text"
          pattern=".*[\S]+.*"
        />
        <FormLabels htmlFor="information">Weitere Infos:</FormLabels>
        <input
          defaultValue={isEditMode ? spot?.information : ""}
          id="information"
          name="information"
          type="text"
          pattern=".*[\S]+.*"
        />
        <Button type="submit" variant="submit">
          {isEditMode ? "Spot aktualisieren" : "Spot erstellen"}
        </Button>
      </CreateForm>
    </CreateSection>
  );
}

const CreateForm = styled.form`
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  padding: 20px;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
`;

const CreateSection = styled.section`
  width: 300px;
  margin: 60px 0 50px 0;
`;

const Checkbox = styled.fieldset`
  padding: 10px;
  margin: 10px 0 10px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid black;
`;

const FormLabels = styled.label`
  font-weight: 600;
  padding-top: 7px;
`;

const Legend = styled.legend`
  font-weight: 600;
`;

const BackSVG = styled.svg`
  margin-bottom: 7px;

  &:hover {
    background-color: lightgrey;
  }
`;
