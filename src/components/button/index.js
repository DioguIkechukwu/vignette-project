import React from "react";
import styled from "styled-components";

const Button = ({ text, onClick }) => {
  return <Container onClick={onClick}>{text}</Container>;
};

export default Button;

const Container = styled.button`
  font-family: "Inter", sans-serif;
  font-size: 20px;
  color: antiquewhite;
  display: flex;
  width: 230px;
  height: 50px;
  padding: 13px 87px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 8px;
  border: none;
  background: var(
    --Secondary-Gradient,
    linear-gradient(96deg, #6a99dd 0%, #be58cb 100%)
  );

  /* Shadow */
  box-shadow: 0px 2px 4px 0px rgba(51, 51, 51, 0.25);
  cursor: pointer;
`;
