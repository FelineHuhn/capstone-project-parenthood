import styled from "styled-components";
import { Button } from "./Button";
import { formCategoryOptions } from "../helpers/formCategoryOptions";
import { useRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";
import SnackBar from "./SnackBar";

export default function SpotForm({ addSpot, spot, editSpot, isEditMode }) {
  const [imageChanged, setImageChanged] = useState(false);
  const [showSnack, setShowSnack] = useState(false);

  let imageUrl = isEditMode ? spot?.imageUrl : "";

  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    if (imageChanged) {
      const response = await fetch("/api/image/upload", {
        method: "POST",
        body: formData,
      });

      const imageDetails = await response.json();
      imageUrl = imageDetails.secureUrl;
    }

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
        spot.isFavorite,
        imageUrl
      );
    } else {
      addSpot(
        category,
        name.trim(),
        addresse.trim(),
        weatherArray,
        ageArray,
        tags.trim(),
        information.trim(),
        imageUrl
      );
    }
    setShowSnack(true);
    event.target.reset();
  }

  return (
    <FormSection>
      <Link
        href={`/spots`}
        aria-label="link that navigates back to the spots page"
      >
        <GoBackIcon
          xmlns="http://www.w3.org/2000/svg"
          height="26px"
          viewBox="0 0 24 24"
          width="26px"
          fill="#4d5b5b"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
        </GoBackIcon>
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
        <FormInputLabel htmlFor="information">Weitere Infos</FormInputLabel>
        <FormInput
          defaultValue={isEditMode ? spot?.information : null}
          id="information"
          name="information"
          type="text"
          pattern=".*[\S]+.*"
        />
        <PhotoUploadInput
          type="file"
          id="image_upload"
          name="image"
          onChange={() => setImageChanged(true)}
        />
        <PhotoUploadLabel htmlFor="image_upload">
          <PhotoUploadSvg
            xmlns="http://www.w3.org/2000/svg"
            height="30px"
            viewBox="0 0 24 24"
            width="30px"
            fill="#ffffff"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
          </PhotoUploadSvg>
          <PhotoUploadLabelText>Foto uploaden</PhotoUploadLabelText>
        </PhotoUploadLabel>
        {imageChanged ? (
          <UploadStateText>&#10003; Bild hinzugefügt</UploadStateText>
        ) : null}
        <Button type="submit" variant="submit" name="submit">
          {isEditMode ? (
            <SubmitButtonText>Spot aktualisieren</SubmitButtonText>
          ) : (
            <SubmitButtonText>Spot erstellen</SubmitButtonText>
          )}
        </Button>
        {showSnack && (
          <SnackBar
            text={"Spot wurde erfolgreich erstellt."}
            onClose={() => router.push("/spots")}
          />
        )}
      </Form>
    </FormSection>
  );
}

const FormSection = styled.section`
  width: 300px;
  margin: 80px 0 60px 0;
  color: var(--secondary-color);
`;

const GoBackIcon = styled.svg`
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
  border-radius: var(--border-radius);
  display: flex;
  flex-direction: column;
`;

const FormCheckbox = styled.fieldset`
  padding: 10px;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: var(--border-radius);
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
  border-radius: var(--border-radius);
  border: 0.5px solid var(--primary-color);
`;

const FormSelect = styled.select`
  font-family: "Poppins-Light";
  color: var(--primary-color);
  border-radius: var(--border-radius);
  border: 0.5px solid var(--primary-color);
`;

const SubmitButtonText = styled.p`
  margin: 1px;
`;

const PhotoUploadInput = styled.input`
  opacity: 0;
`;
const PhotoUploadLabel = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--primary-color);
  color: var(--white-color);
  opacity: 0.7;
  border-radius: var(--border-radius);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin-bottom: 60px;
  :hover {
    background-color: var(--secondary-color);
  }
`;

const PhotoUploadSvg = styled.svg`
  margin-top: 15px;
`;

const PhotoUploadLabelText = styled.p`
  margin-top: 4px;
`;

const UploadStateText = styled.p`
  color: var(--secondary-color);
  position: absolute;
  top: 875px;
`;
