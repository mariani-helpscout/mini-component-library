import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <SelectWrapper>
      <DisplayedValue>
        {displayedValue}
        <Icon id="chevron-down" strokeWidth={2}></Icon>
      </DisplayedValue>

      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
    </SelectWrapper>
  );
};

const SelectWrapper = styled.div`
  position: relative;
  width: max-content;
`;

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  opacity: 0;

  /* Allow the select to span the full height in Safari */
  -webkit-appearance: none;
`;

const DisplayedValue = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  border-radius: 8px;

  padding: 12px 16px;

  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};

  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

export default Select;
