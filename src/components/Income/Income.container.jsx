import { compose } from "redux";
import PopUpWrapper from "../PopUpWrapper/PopUpWrapper.component";
import Income from "./Income.component";

const IncomeContainer = compose(
  PopUpWrapper
)(Income)

export default IncomeContainer
