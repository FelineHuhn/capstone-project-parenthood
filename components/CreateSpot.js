import styled from "styled-components";
import { Button } from "./Button";

export default function CreateSpot() {
  return (
    <CreateSection>
      <FormHeadline>ParentHood Spot hinzufügen</FormHeadline>
      <CreateForm>
        <FormLabels for="spot-category">Kategorie*</FormLabels>
        <select id="spot-category" name="spot-category" required>
          <option value="">--Bitte eine Kategorie auswählen--</option>
          <option value="playground">Spielplatz</option>
          <option value="indoor-playground">Indoor Spielplatz</option>
          <option value="playing">Spielen</option>
          <option value="sports">Sport</option>
          <option value="sports-field">Sportplatz</option>
          <option value="sports-hall">Sporthalle</option>
          <option value="sports-course">Sportkurs</option>
          <option value="climbing">Klettern</option>
          <option value="skating">Skaten</option>
          <option value="wintersports">Wintersport</option>
          <option value="indoor-swimming">Schwimmbad</option>
          <option value="outdoor-swimming">Freibad</option>
          <option value="bathing-lake">Badesee</option>
          <option value="beach">Strand & Meer</option>
          <option value="park">Park</option>
          <option value="forest">Wald</option>
          <option value="cultures">Kultur</option>
          <option value="music">Musik</option>
          <option value="arts">Kunst</option>
          <option value="crafting">Basteln</option>
          <option value="food-and-drink">Essen & Trinken</option>
          <option value="overnight-stay">Übernachtung</option>
          <option value="amusement-park">Freizeitpark</option>
          <option value="animals">Tiere</option>
          <option value="other">ParentHood Spot</option>
        </select>
        <FormLabels for="spot-name">Name*</FormLabels>
        <input id="spot-name" name="spot-name" type="text" required />
        <FormLabels for="spot-addresse">Adresse*</FormLabels>
        <input id="spot-addresse" name="spot-addresse" type="text" required />
        <FormLabels for="spot-tags">Tags</FormLabels>
        <input id="spot-tags" name="spot-tags" type="text" />
        <Checkbox>
          <Legend>Wetterempfehlung</Legend>
          <div>
            <input
              id="spot-weathersuggestion"
              name="spot-weathersuggestion"
              type="checkbox"
              value="good-weather"
            />
            <label for="spot-weathersuggestion">bei gutem Wetter</label>
          </div>
          <div>
            <input
              id="spot-weathersuggestion"
              name="spot-weathersuggestion"
              type="checkbox"
              value="moderate-weather"
            />
            <label for="spot-weathersuggestion">bei mäßigem Wetter</label>
          </div>
          <div>
            <input
              id="spot-weathersuggestion"
              name="spot-weathersuggestion"
              type="checkbox"
              value="bad-weather"
            />
            <label for="spot-weathersuggestion">bei schlechtem Wetter</label>
          </div>
        </Checkbox>
        <Checkbox>
          <Legend>Altersempfehlung</Legend>
          <div>
            <input
              id="spot-agesuggestion"
              name="spot-agesuggestion"
              type="checkbox"
              value="children-under-1-year"
            />
            <label for="spot-agesuggestion">Kinder unter 1 Jahr</label>
          </div>
          <div>
            <input
              id="spot-agesuggestion"
              name="spot-agesuggestion"
              type="checkbox"
              value="children-between-1-to-3"
            />
            <label for="spot-agesuggestion">Kinder 1 - 3 Jahre</label>
          </div>
          <div>
            <input
              id="spot-agesuggestion"
              name="spot-agesuggestion"
              type="checkbox"
              value="children-between-3-to-6"
            />
            <label for="spot-agesuggestion">Kinder 3 - 6 Jahre</label>
          </div>
          <div>
            <input
              id="spot-agesuggestion"
              name="spot-agesuggestion"
              type="checkbox"
              value="children-between-6-to-9"
            />
            <label for="spot-agesuggestion">Kinder 6 - 9 Jahre</label>
          </div>
          <div>
            <input
              id="spot-agesuggestion"
              name="spot-agesuggestion"
              type="checkbox"
              value="children-between-9-to-12"
            />
            <label for="spot-agesuggestion">Kinder 9 - 12 Jahre</label>
          </div>
          <div>
            <input
              id="spot-agesuggestion"
              name="spot-agesuggestion"
              type="checkbox"
              value="teenager"
            />
            <label for="spot-agesuggestion">Teenager</label>
          </div>
        </Checkbox>
        <FormLabels for="spot-information">Weitere Infos:</FormLabels>
        <textarea
          aria-invalid="spot-information"
          name="spot-information"
          type="text"
        ></textarea>
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
