import { formCategoryOptions } from "../helpers/formCategoryOptions";
import styled from "styled-components";

export default function SpotFilter({ handleChange }) {
  return (
    <FilterSection>
      <FilterLabel htmlFor="category">Filtern</FilterLabel>
      <FilterIcon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enableBackground="new 0 0 24 24"
          height="20px"
          viewBox="0 0 24 24"
          width="20px"
          fill="#4d5b5b"
        >
          <g>
            <path d="M0,0h24 M24,24H0" fill="none" />
            <path d="M4.25,5.61C6.27,8.2,10,13,10,13v6c0,0.55,0.45,1,1,1h2c0.55,0,1-0.45,1-1v-6c0,0,3.72-4.8,5.74-7.39 C20.25,4.95,19.78,4,18.95,4H5.04C4.21,4,3.74,4.95,4.25,5.61z" />
            <path d="M0,0h24v24H0V0z" fill="none" />
          </g>
        </svg>
      </FilterIcon>

      <FilterSelect
        id="select-filter"
        defaultValue="all"
        onChange={(event) => handleChange(event)}
      >
        <option value="">Alle ParentHood Spots</option>
        {formCategoryOptions.map((optionEntry) => (
          <option key={optionEntry} value={optionEntry}>
            {optionEntry}
          </option>
        ))}
      </FilterSelect>
    </FilterSection>
  );
}

const FilterSection = styled.section`
  margin-top: 80px;
  padding: 8px 15px 5px 5px;
  width: 375px;
  height: 33px;
  display: flex;
  justify-content: right;
`;

const FilterLabel = styled.label`
  color: var(--secondary-color);
  font-weight: 300;
  font-size: 1.1rem;
  margin-top: -3px;
`;

const FilterIcon = styled.div`
  padding: 0 8px 0 5px;
`;

const FilterSelect = styled.select`
  font-family: "Poppins-Light";
  color: var(--secondary-color);
  border: none;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: var(--border-radius);
  font-weight: 300;
  font-size: 1em;
`;
