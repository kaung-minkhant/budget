import { styled } from "styled-components";

const login = 'D64242';
const loginHover = 'E08080';
const loginClick = 'F1E7E7';

const signup = 'E88C6F';
const signupHover = 'EE6236';
const signupClick = 'F1E7E7';

const primary = 'D02A2A';
const primaryHover = 'DE6767';
const primaryClick = 'B69090';

const colorSelect = (theme, type) => {
  if (type === 'normal') {
    if (theme === 'login') {
      return login;
    } else if (theme === 'signup') {
      return signup;
    } else if (theme === 'primary') {
      return primary;
    }
  } else if (type === 'hover') {
    if (theme === 'login') {
      return loginHover;
    } else if (theme === 'signup') {
      return signupHover;
    } else if (theme === 'primary') {
      return primaryHover
    }
  } else if (type === 'click') {
    if (theme === 'login') {
      return loginClick;
    } else if (theme === 'signup') {
      return signupClick;
    } else if (theme === 'primary') {
      return primaryClick
    } 
  }
}

export const CustomButtonStyle = styled.button`
  width: ${props => `${props.width}px`};
  cursor: pointer;
  height: ${props => `${props.height}px`};
  border: none;
  border-radius: 10px;
  font-size: ${props => `${props.fontsize}px`};
  background-color: ${props => `#${colorSelect(props.theme, 'normal')}`};
  &:hover {
    background-color: ${props => `#${colorSelect(props.theme, 'hover')}`};
  }
  &:active {
    background-color: ${props => `#${colorSelect(props.theme, 'click')}`};
  }

  @media (max-width: 450px) {
    width: ${props => `${props.width * 0.5}px`};
    font-size: ${props => `${props.fontsize * 0.6}px`};
    height: ${props => `${props.height * 0.6}px`}
  }
`;
