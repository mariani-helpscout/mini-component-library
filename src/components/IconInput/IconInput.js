import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const styles = STYLES[size];

  const setParentFocus = (e) => {
    e.target.parentElement.focus();
  };

  return (
    <IconInputWrapper
      width={width}
      style={{ "--border-thickness": styles.borderSize }}
      tabIndex={0}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ "--size": styles.iconSize }}>
        <Icon id={icon} size={styles.iconSize}></Icon>
      </IconWrapper>
      <TextInput
        type="text"
        placeholder={placeholder}
        style={{ "--height": styles.height, "--font-size": styles.fontSize }}
        onFocus={(e) => setParentFocus(e)}
      ></TextInput>
    </IconInputWrapper>
  );
};

const STYLES = {
  small: {
    borderSize: "1px",
    fontSize: "14px",
    iconSize: "16px",
    height: "24px",
  },
  large: {
    borderSize: "2px",
    fontSize: "18px",
    iconSize: "24px",
    height: "36px",
  },
};

const IconInputWrapper = styled.div`
  border-bottom: var(--border-thickness) solid ${COLORS.black};
  width: ${(p) => p.width + "px"};

  display: flex;
  align-items: center;

  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }

  &:focus {
    outline-offset: 2px;
    outline: 2px solid ${COLORS.primary};
    outline-radius: 2px;
  }
`;

const TextInput = styled.input`
  height: var(--height);
  font-size: var(--font-size);

  border: none;

  color: inherit;

  ::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }

  &:focus {
    outline: none;
  }
`;

const IconWrapper = styled.div`
  height: var(--size);
`;

export default IconInput;
