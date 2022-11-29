import { formCategoryOptions } from "../helpers/formCategoryOptions";
import styled from "styled-components";

export default function SpotFilter({ handleChange }) {
  return (
    <>
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
    </>
  );
}

const FilterLabel = styled.label`
  margin-top: 60px;
  color: darkgreen;
  font-size: large;
`;

const FilterSelect = styled.select`
  margin-top: 10px;
`;
