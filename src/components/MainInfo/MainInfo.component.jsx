import './MainInfo.styles.css'

const MainInfo = ({amount = 0}) => {
  return (
    <div className='maininfocontainer'>
      <div className='maininfodiv'>
        <span className='amount'>Amount Available Per Day</span>
        <span className='amount'>MMK {amount}</span>
      </div>
    </div>
  )
}

export default MainInfo
