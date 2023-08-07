import './PopUpWrapper.styles.css'

const PopUpWrapper = (WrappedComponent) => {
  const NewComponent = ({  onClose, ...otherProps }) => {
    return (
      <div onClick={() => onClose()} className={`popupContainer`}>
        <div onClick={(e) => e.stopPropagation()} className='content'>
          <WrappedComponent onClose={onClose} {...otherProps}/>
        </div>
      </div>
    )
  }

  return NewComponent
}

export default PopUpWrapper
