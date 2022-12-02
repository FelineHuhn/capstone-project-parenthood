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
        information.trim(),
        spot.isFavorite
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
    <FormSection>
      <Link href={`/spots`}>
        <GoBackSVG
          xmlns="http://www.w3.org/2000/svg"
          height="26px"
          viewBox="0 0 24 24"
          width="26px"
          fill="#4d5b5b"
        >
          <title>go back icon</title>
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
        </GoBackSVG>
      </Link>
      <Form onSubmit={handleSubmit}>
        <FormInputLabel htmlFor="category">Kategorie*</FormInputLabel>
        <FormSelect
          defaultValue={isEditMode ? spot?.category : null}
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
        </FormSelect>
        <FormInputLabel htmlFor="name">Name*</FormInputLabel>
        <FormInput
          defaultValue={isEditMode ? spot?.name : null}
          id="name"
          name="name"
          type="text"
          pattern=".*[\S]+.*"
          required
        />
        <FormInputLabel htmlFor="addresse">Adresse*</FormInputLabel>
        <FormInput
          id="addresse"
          name="addresse"
          type="text"
          pattern=".*[\S]+.*"
          defaultValue={isEditMode ? spot?.addresse : null}
          placeholder="Musterstraße 1, 12345 Musterstadt"
          required
        />
        <FormCheckbox>
          <CheckboxLegend>Wetterempfehlung</CheckboxLegend>
          <div>
            <FormInput
              defaultChecked={
                isEditMode && spot?.weathersuggestion[0]?.length > 0
              }
              id="good_weather"
              name="good_weather"
              type="checkbox"
              value="bei gutem Wetter"
            />
            <CheckboxOption htmlFor="weathersuggestion">
              bei gutem Wetter
            </CheckboxOption>
          </div>
          <div>
            <FormInput
              defaultChecked={
                isEditMode && spot?.weathersuggestion[1]?.length > 0
              }
              id="moderate_weather"
              name="moderate_weather"
              type="checkbox"
              value="bei mäßigem Wetter"
            />
            <CheckboxOption htmlFor="weathersuggestion">
              bei mäßigem Wetter
            </CheckboxOption>
          </div>
          <div>
            <FormInput
              defaultChecked={
                isEditMode && spot?.weathersuggestion[2]?.length > 0
              }
              id="bad_weather"
              name="bad_weather"
              type="checkbox"
              value="bei schlechtem Wetter"
            />
            <CheckboxOption htmlFor="weathersuggestion">
              bei schlechtem Wetter
            </CheckboxOption>
          </div>
        </FormCheckbox>
        <FormCheckbox>
          <CheckboxLegend>Altersempfehlung</CheckboxLegend>
          <div>
            <FormInput
              defaultChecked={isEditMode && spot?.agesuggestion[0]?.length > 0}
              id="children_under_1"
              name="children_under_1"
              type="checkbox"
              value="Kinder unter 1 Jahr"
            />
            <CheckboxOption htmlFor="agesuggestion">
              Kinder unter 1 Jahr
            </CheckboxOption>
          </div>
          <div>
            <FormInput
              defaultChecked={isEditMode && spot?.agesuggestion[1]?.length > 0}
              id="children_1_to_3"
              name="children_1_to_3"
              type="checkbox"
              value="Kinder 1 - 3 Jahre"
            />
            <CheckboxOption htmlFor="agesuggestion">
              Kinder 1 - 3 Jahre
            </CheckboxOption>
          </div>
          <div>
            <FormInput
              defaultChecked={isEditMode && spot?.agesuggestion[2]?.length > 0}
              id="children_3_to_6"
              name="children_3_to_6"
              type="checkbox"
              value="Kinder 3 - 6 Jahre"
            />
            <CheckboxOption htmlFor="agesuggestion">
              Kinder 3 - 6 Jahre
            </CheckboxOption>
          </div>
          <div>
            <FormInput
              defaultChecked={isEditMode && spot?.agesuggestion[3]?.length > 0}
              id="children_6_to_9"
              name="children_6_to_9"
              type="checkbox"
              value="Kinder 6 - 9 Jahre"
            />
            <CheckboxOption htmlFor="agesuggestion">
              Kinder 6 - 9 Jahre
            </CheckboxOption>
          </div>
          <div>
            <FormInput
              defaultChecked={isEditMode && spot?.agesuggestion[4]?.length > 0}
              id="children_9_to_12"
              name="children_9_to_12"
              type="checkbox"
              value="Kinder 9 - 12 Jahre"
            />
            <CheckboxOption htmlFor="agesuggestion">
              Kinder 9 - 12 Jahre
            </CheckboxOption>
          </div>
          <div>
            <FormInput
              defaultChecked={isEditMode && spot?.agesuggestion[5]?.length > 0}
              id="teenager"
              name="teenager"
              type="checkbox"
              value="Teenager"
            />
            <CheckboxOption htmlFor="agesuggestion">Jugendliche</CheckboxOption>
          </div>
        </FormCheckbox>
        <FormInputLabel htmlFor="tags">Tags</FormInputLabel>
        <FormInput
          defaultValue={isEditMode ? spot?.tags.join(", ") : null}
          id="tags"
          name="tags"
          type="text"
          pattern=".*[\S]+.*"
          placeholder="parenthood, lieblingsort, ..."
        />
        <FormInputLabel htmlFor="information">Weitere Infos:</FormInputLabel>
        <FormInput
          defaultValue={isEditMode ? spot?.information : null}
          id="information"
          name="information"
          type="text"
          pattern=".*[\S]+.*"
        />
        <Button type="submit" variant="submit" name="submit button">
          {isEditMode ? (
            <SubmitButtonText>Spot aktualisieren</SubmitButtonText>
          ) : (
            <SubmitButtonText>Spot erstellen</SubmitButtonText>
          )}
        </Button>
      </Form>
    </FormSection>
  );
}

const FormSection = styled.section`
  width: 300px;
  margin: 80px 0 60px 0;
  color: var(--secondary-color);
`;

const GoBackSVG = styled.svg`
  margin-bottom: 10px;
  color: var(--secondary-color);

  &:hover {
    background-color: transparent;
    filter: var(--primary-dropshadow);
  }
`;

const Form = styled.form`
  background-color: var(--white-color);
  box-shadow: var(--primary-boxshadow);
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

const FormCheckbox = styled.fieldset`
  padding: 10px;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 4px;
  border: 0.5px solid var(--primary-color);
`;

const CheckboxLegend = styled.legend`
  font-weight: 600;
`;

const CheckboxOption = styled.label`
  margin-left: 2px;
`;

const FormInputLabel = styled.label`
  font-weight: 600;
  padding-top: 7px;
`;

const FormInput = styled.input`
  border-radius: 4px;
  border: 0.5px solid var(--primary-color);
`;

const FormSelect = styled.select`
  font-family: "Poppins-Light";
  color: var(--primary-color);
  border-radius: 4px;
  border: 0.5px solid var(--primary-color);
`;

const SubmitButtonText = styled.p`
  color: var(--second-font-color);
  margin: 1px;
  filter: var(--third-dropshadow);
`;
