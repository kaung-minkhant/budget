import { ErrorStyle, InputContainerStyle, InputFieldStyle, InputLabelStyle } from './CustomInput.styles';

const CustomInput = ({type, error, label, width='367', ...otherAttributes}) => {
  return (
    <InputContainerStyle width={width} height={94} fontsize={20}>
      <InputLabelStyle>{label}</InputLabelStyle>
      <InputFieldStyle type={type} {...otherAttributes}/>
      {error && (<ErrorStyle>{error}</ErrorStyle>)}
    </InputContainerStyle>
  )
}

export default CustomInput;
