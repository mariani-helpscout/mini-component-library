/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const ProgressBar = ({ value, size }) => {
  return (
    <ProgressBarWrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      size={size}
    >
      <VisuallyHidden>{value}%</VisuallyHidden>
      <Progress value={value} size={size} />
    </ProgressBarWrapper>
  );
};

const heights = {
  small: "8px",
  medium: "12px",
  large: "24px",
};

const wrapperWidth = 370;

const ProgressBarWrapper = styled.div`
  width: ${wrapperWidth + "px"};
  height: ${(p) => heights[p.size]};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: ${(p) => (p.size === "large" ? "8px" : "4px")};
  display: flex;
`;

const Progress = styled.div`
  margin: ${(p) => (p.size === "large" ? "4px" : 0)};
  width: ${(p) => wrapperWidth * (p.value / 100) + "px"};
  background-color: ${COLORS.primary};
  border-radius: ${(p) => (p.value !== 100 ? "4px 0px 0px 4px" : "4px")};
`;

export default ProgressBar;
