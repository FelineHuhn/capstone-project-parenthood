import styled from "styled-components";
import { Button } from "./Button";
import { formCategoryOptions } from "../helpers/formCategoryOptions";
import { nanoid } from "nanoid";

export default function CreateSpot({ addSpot }) {
  function handleSubmit(event) {
    if (
      !(event.target.name.value === " ") ||
      !(event.target.addresse.value === " ")
    ) {
      event.preventDefault();

      const formData = new FormData(event.target);
      const data = Object.fromEntries(formData);

      const weatherArray = [
        data.good_weather,
        data.moderate_weather,
        data.bad_weather,
      ];

      const ageArray = [
        data.children_under_1,
        data.children_1_to_3,
        data.children_3_to_6,
        data.children_6_to_9,
        data.children_9_to_12,
        data.teenager,
      ];

      addSpot(
        data.category.trim(),
        data.name.trim(),
        data.addresse.trim(),
        weatherArray,
        ageArray,
        data.tags.trim(),
        data.information.trim()
      );

      event.target.reset();
    } else {
      alert("Nur Leerzeichen sind nicht erlaubt! Spot wurde nicht erstellt");
    }
  }

  return (
    <CreateSection>
      <FormHeadline>ParentHood Spot hinzufügen</FormHeadline>
      <CreateForm onSubmit={handleSubmit}>
        <FormLabels htmlFor="category">Kategorie*</FormLabels>
        <select id="category" name="category" required>
          <option value="">--Bitte eine Kategorie auswählen--</option>
          {formCategoryOptions.map((optionEntry) => (
            <option key={nanoid()} value={optionEntry}>
              {optionEntry}
            </option>
          ))}
        </select>
        <FormLabels htmlFor="name">Name*</FormLabels>
        <input id="name" name="name" type="text" required />
        <FormLabels htmlFor="addresse">Adresse*</FormLabels>
        <input id="addresse" name="addresse" type="text" required />
        <Checkbox>
          <Legend>Wetterempfehlung</Legend>
          <div>
            <input
              id="good_weather"
              name="good_weather"
              type="checkbox"
              value="bei gutem Wetter"
            />
            <label htmlFor="weathersuggestion">bei gutem Wetter</label>
          </div>
          <div>
            <input
              id="moderate_weather"
              name="moderate_weather"
              type="checkbox"
              value="bei mäßigem Wetter"
            />
            <label htmlFor="weathersuggestion">bei mäßigem Wetter</label>
          </div>
          <div>
            <input
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
              id="children_under_1"
              name="children_under_1"
              type="checkbox"
              value="Kinder unter 1 Jahr"
            />
            <label htmlFor="agesuggestion">Kinder unter 1 Jahr</label>
          </div>
          <div>
            <input
              id="children_1_to_3"
              name="children_1_to_3"
              type="checkbox"
              value="Kinder 1 - 3 Jahre"
            />
            <label htmlFor="agesuggestion">Kinder 1 - 3 Jahre</label>
          </div>
          <div>
            <input
              id="children_3_to_6"
              name="children_3_to_6"
              type="checkbox"
              value="Kinder 3 - 6 Jahre"
            />
            <label htmlFor="agesuggestion">Kinder 3 - 6 Jahre</label>
          </div>
          <div>
            <input
              id="children_6_to_9"
              name="children_6_to_9"
              type="checkbox"
              value="Kinder 6 - 9 Jahre"
            />
            <label htmlFor="agesuggestion">Kinder 6 - 9 Jahre</label>
          </div>
          <div>
            <input
              id="children_9_to_12"
              name="children_9_to_12"
              type="checkbox"
              value="Kinder 9 - 12 Jahre"
            />
            <label htmlFor="agesuggestion">Kinder 9 - 12 Jahre</label>
          </div>
          <div>
            <input
              id="teenager"
              name="teenager"
              type="checkbox"
              value="Teenager"
            />
            <label htmlFor="agesuggestion">Teenager</label>
          </div>
        </Checkbox>
        <FormLabels htmlFor="tags">Tags</FormLabels>
        <input id="tags" name="tags" type="text" />
        <FormLabels htmlFor="information">Weitere Infos:</FormLabels>
        <input id="information" name="information" type="text" />
        <Button type="submit" variant="submit">
          Spot erstellen
        </Button>
      </CreateForm>
    </CreateSection>
  );
}

const CreateForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const CreateSection = styled.section`
  background-color: white;
  border: 1px solid black;
  padding: 20px;
  margin: 20px;
  border-radius: 10px;
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

const FormHeadline = styled.h2`
  font-size: 1.3em;
`;
