import { useSelector } from "react-redux";
import "./Burger.styles.css";
import { selectAlreadSet } from "../../redux/budget/budget.selectors";

const Burger = ({ onClick, openState, onClose = () => {}, onBudget, onExpense, onIncome, onReserve}) => {
  const budgetAlreadySet = useSelector(selectAlreadSet)
  return (
    <>
      <div
        className={`humburger ${openState ? "hide" : ""}`}
        onClick={() => onClick()}
      >
        <div className="burger" />
        <div className="burger" />
        <div className="burger" />
      </div>
      <div className={`burgerOverlayContainer ${openState ? "open" : ""}`}>
        <span className="close" onClick={() => onClose()}>&#10060;</span>

        <span className={`button ${budgetAlreadySet ? 'disabled' : ''}`} onClick={() => { onClose(); budgetAlreadySet || onBudget()}}>Add Budget</span>
        <span className={`button ${budgetAlreadySet ? '' : 'disabled'}`} onClick={() => { onClose(); budgetAlreadySet && onExpense()}}>Add Expense</span>
        <span className={`button ${budgetAlreadySet ? '' : 'disabled'}`} onClick={() => { onClose(); budgetAlreadySet && onIncome()}}>Add Income</span>
        <span className={`button ${budgetAlreadySet ? '' : 'disabled'}`} onClick={() => { onClose(); budgetAlreadySet && onReserve()}}>Add Reserve</span>
      </div>
    </>
  );
};

export default Burger;
