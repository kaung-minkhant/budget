import './CustomInput.styles.css'

const CustomInput = ({type, error, label, ...otherAttributes}) => {
  return (
    <div className='inputcontainer'>
      <div className='inputlabel'>{label}</div>
      <input className='inputfield' type={type} {...otherAttributes}/>
      {error && (<span className='error'>{error}</span>)}
    </div>
  )
}

export default CustomInput;
