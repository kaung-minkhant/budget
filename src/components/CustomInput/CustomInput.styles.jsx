import { styled } from "styled-components";

export const InputContainerStyle = styled.div`
  width: ${props => `${props.width}px`};
  height: 94px;
`;

export const InputLabelStyle = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
`;

export const InputFieldStyle = styled.input`
  border: none;
  outline: none;
  width: 100%;
  height: 44px;
  border-radius: 10px;
  font-size: 15px;
  box-sizing: border-box;
  padding-left: 16px;
`;

export const ErrorStyle = styled.span`
  padding-left: 16px;
  font-size: 13px;
  color: red;
`;
