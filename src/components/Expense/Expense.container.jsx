import { compose } from "redux";
import PopUpWrapper from "../PopUpWrapper/PopUpWrapper.component";
import Expense from "./Expense.component";

const ExpenseContainer = compose(
  PopUpWrapper
)(Expense)

export default ExpenseContainer
