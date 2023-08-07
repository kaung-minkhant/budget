import { styled } from "styled-components";

export const PopupBodyContainerStyle = styled.div`
  position: relative;
  border-style: solid;
  border-radius: 20px;
  background-color: #D8B7B7;
  width: 532px;
  height: ${props => `${props.height}px`};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PopupHeaderStyle = styled.div`
  padding-top: 42px;
  display: flex;
  align-items: center;
`;

export const PopupTitleStyle = styled.span`
  text-align: center;
  font-size: 32px;
`;

export const PopupBodyStyle = styled.div`
  margin-top: 42px;
  display: flex;
  width: fit-content;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

export const PopupCloseStyle = styled.span`
  position: absolute;
  cursor: pointer;
  left: 474px;
`;

export const PopupSubmitStyle = styled.div`
  margin-top: 47px;
`;
