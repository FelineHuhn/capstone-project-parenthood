import styled from "styled-components";
import { Button } from "./Button";

export default function CreateSpot({ addSpot, closeCreatePage }) {
  function handleSubmit(event) {
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
      data.category,
      data.name,
      data.addresse,
      weatherArray,
      ageArray,
      data.tags,
      data.information
    );

    event.target.reset();
    closeCreatePage();
  }

  return (
    <CreateSection>
      <FormHeadline>ParentHood Spot hinzufügen</FormHeadline>
      <CreateForm onSubmit={handleSubmit}>
        <FormLabels for="category">Kategorie*</FormLabels>
        <select id="category" name="category" required>
          <option value="">--Bitte eine Kategorie auswählen--</option>
          <option value="Spielplatz">Spielplatz</option>
          <option value="Indoor Spielplatz">Indoor Spielplatz</option>
          <option value="Spielen">Spielen</option>
          <option value="Sport">Sport</option>
          <option value="Sportplatz">Sportplatz</option>
          <option value="Sporthalle">Sporthalle</option>
          <option value="Sportkurs">Sportkurs</option>
          <option value="Klettern">Klettern</option>
          <option value="Skaten">Skaten</option>
          <option value="Wintersport">Wintersport</option>
          <option value="Schwimmbad">Schwimmbad</option>
          <option value="Freibad">Freibad</option>
          <option value="Badesee">Badesee</option>
          <option value="Strand & Meer">Strand & Meer</option>
          <option value="Park">Park</option>
          <option value="Wald">Wald</option>
          <option value="Kultur">Kultur</option>
          <option value="Musik">Musik</option>
          <option value="Kunst">Kunst</option>
          <option value="Zirkus">Zirkus</option>
          <option value="Basteln">Basteln</option>
          <option value="Essen & Trinken">Essen & Trinken</option>
          <option value="Übernachtung">Übernachtung</option>
          <option value="Freizeitpark">Freizeitpark</option>
          <option value="Jahrmarkt">Jahrmarkt</option>
          <option value="Zoo">Zoo</option>
          <option value="Tiere">Wildpark</option>
          <option value="Bauernhof">Bauernhof</option>
          <option value="Ponyreiten">Ponyreiten</option>
          <option value="ParentHood Spot">Sonstiger Spot</option>
        </select>
        <FormLabels for="name">Name*</FormLabels>
        <input id="name" name="name" type="text" required />
        <FormLabels for="addresse">Adresse*</FormLabels>
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
            <label for="weathersuggestion">bei gutem Wetter</label>
          </div>
          <div>
            <input
              id="moderate_weather"
              name="moderate_weather"
              type="checkbox"
              value="bei mäßigem Wetter"
            />
            <label for="weathersuggestion">bei mäßigem Wetter</label>
          </div>
          <div>
            <input
              id="bad_weather"
              name="bad_weather"
              type="checkbox"
              value="bei schlechtem Wetter"
            />
            <label for="weathersuggestion">bei schlechtem Wetter</label>
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
            <label for="agesuggestion">Kinder unter 1 Jahr</label>
          </div>
          <div>
            <input
              id="children_1_to_3"
              name="children_1_to_3"
              type="checkbox"
              value="Kinder 1 - 3 Jahre"
            />
            <label for="agesuggestion">Kinder 1 - 3 Jahre</label>
          </div>
          <div>
            <input
              id="children_3_to_6"
              name="children_3_to_6"
              type="checkbox"
              value="Kinder 3 - 6 Jahre"
            />
            <label for="agesuggestion">Kinder 3 - 6 Jahre</label>
          </div>
          <div>
            <input
              id="children_6_to_9"
              name="children_6_to_9"
              type="checkbox"
              value="Kinder 6 - 9 Jahre"
            />
            <label for="agesuggestion">Kinder 6 - 9 Jahre</label>
          </div>
          <div>
            <input
              id="children_9_to_12"
              name="children_9_to_12"
              type="checkbox"
              value="Kinder 9 - 12 Jahre"
            />
            <label for="agesuggestion">Kinder 9 - 12 Jahre</label>
          </div>
          <div>
            <input
              id="teenager"
              name="teenager"
              type="checkbox"
              value="Teenager"
            />
            <label for="agesuggestion">Teenager</label>
          </div>
        </Checkbox>
        <FormLabels for="tags">Tags</FormLabels>
        <input id="tags" name="tags" type="text" />
        <FormLabels for="information">Weitere Infos:</FormLabels>
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
