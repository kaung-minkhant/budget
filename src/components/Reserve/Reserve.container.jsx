import { compose } from "redux";
import PopUpWrapper from "../PopUpWrapper/PopUpWrapper.component";
import Reserve from "./Reserve.component";

const ReserveContainer = compose(
  PopUpWrapper
)(Reserve)

export default ReserveContainer
