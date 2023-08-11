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

  @media (max-width: 450px) {
    width: 300px;
    height: fit-content;
    padding-bottom: 20px;
  }
`;

export const PopupHeaderStyle = styled.div`
  padding-top: 42px;
  display: flex;
  align-items: center;

  @media (max-width: 450px) {
    padding-top: 20px;
  }
`;

export const PopupTitleStyle = styled.span`
  text-align: center;
  font-size: 32px;

  @media (max-width: 450px) {
    font-size: 25px;
  }
`;

export const PopupBodyStyle = styled.div`
  margin-top: 42px;
  display: flex;
  width: fit-content;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  @media (max-width: 450px) {
    gap: 2px;
  }
`;

export const PopupCloseStyle = styled.span`
  position: absolute;
  cursor: pointer;
  left: 474px;

  @media (max-width: 450px) {
    left: ${() => `${300-58}px`};
  }
`;

export const PopupSubmitStyle = styled.div`
  margin-top: 47px;

  @media (max-width: 450px) {
    margin-top: 20px;
  }
`;
