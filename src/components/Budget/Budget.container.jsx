import { compose } from "redux";
import PopUpWrapper from "../PopUpWrapper/PopUpWrapper.component";
import Budget from "./Budget.component";

const BudgetContainer = compose(
  PopUpWrapper
)(Budget)

export default BudgetContainer
