import { formCategoryOptions } from "../helpers/formCategoryOptions";
import styled from "styled-components";

export default function SpotFilter({ handleChange }) {
  return (
    <FilterSection>
      <FilterLabel htmlFor="category">Nach Kategorie filtern</FilterLabel>
      <FilterSelect
        id="select-filter"
        defaultValue="all"
        onChange={(event) => handleChange(event)}
      >
        <option value="">--Alle ParentHood Spots--</option>
        {formCategoryOptions.map((optionEntry) => (
          <option key={optionEntry} value={optionEntry}>
            {optionEntry}
          </option>
        ))}
      </FilterSelect>
    </FilterSection>
  );
}

const FilterLabel = styled.label`
  color: darkgreen;
  margin: 0 5px 0 10px;
`;

const FilterSelect = styled.select`
  margin-right: 5px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  color: dimgray;
  border: 1px solid dimgray;
  border-radius: 1px solid dimgrey;
`;

const FilterSection = styled.section`
  margin-top: 51px;
  padding: 2px 5px 2px 5px;
  background-color: white;
  position: fixed;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
