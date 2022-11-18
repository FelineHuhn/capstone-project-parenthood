import styled from "styled-components";
import { Button } from "./Button";

export default function CreateSpot({ addSpot }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    addSpot(
      data.category,
      data.name,
      data.addresse,
      data.weathersuggestion,
      data.agesuggestion,
      data.tags,
      data.information
    );
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
              id="weathersuggestion"
              name="weathersuggestion"
              type="checkbox"
              value="good-weather"
            />
            <label for="weathersuggestion">bei gutem Wetter</label>
          </div>
          <div>
            <input
              id="weathersuggestion"
              name="weathersuggestion"
              type="checkbox"
              value="moderate-weather"
            />
            <label for="weathersuggestion">bei mäßigem Wetter</label>
          </div>
          <div>
            <input
              id="weathersuggestion"
              name="weathersuggestion"
              type="checkbox"
              value="bad-weather"
            />
            <label for="weathersuggestion">bei schlechtem Wetter</label>
          </div>
        </Checkbox>
        <Checkbox>
          <Legend>Altersempfehlung</Legend>
          <div>
            <input
              id="agesuggestion"
              name="agesuggestion"
              type="checkbox"
              value="children-under-1-year"
            />
            <label for="agesuggestion">Kinder unter 1 Jahr</label>
          </div>
          <div>
            <input
              id="agesuggestion"
              name="agesuggestion"
              type="checkbox"
              value="children-between-1-to-3"
            />
            <label for="agesuggestion">Kinder 1 - 3 Jahre</label>
          </div>
          <div>
            <input
              id="agesuggestion"
              name="agesuggestion"
              type="checkbox"
              value="children-between-3-to-6"
            />
            <label for="agesuggestion">Kinder 3 - 6 Jahre</label>
          </div>
          <div>
            <input
              id="agesuggestion"
              name="agesuggestion"
              type="checkbox"
              value="children-between-6-to-9"
            />
            <label for="agesuggestion">Kinder 6 - 9 Jahre</label>
          </div>
          <div>
            <input
              id="agesuggestion"
              name="agesuggestion"
              type="checkbox"
              value="children-between-9-to-12"
            />
            <label for="agesuggestion">Kinder 9 - 12 Jahre</label>
          </div>
          <div>
            <input
              id="agesuggestion"
              name="agesuggestion"
              type="checkbox"
              value="teenager"
            />
            <label for="agesuggestion">Teenager</label>
          </div>
        </Checkbox>
        <FormLabels for="tags">Tags</FormLabels>
        <input id="tags" name="tags" type="text" />
        <FormLabels for="information">Weitere Infos:</FormLabels>
        <textarea id="information" name="information" type="text"></textarea>
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
