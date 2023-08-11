import { CustomButtonStyle } from './CustomButton.styles';

const CustomButton = ({label, onClick = () => {}, theme, width, ...otherProps}) => {
  return(
      <CustomButtonStyle theme={theme} height={68} fontsize={32} onClick={() => onClick()} {...otherProps} width={width}>{label}</CustomButtonStyle>
  );
}

export default CustomButton;
