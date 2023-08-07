import { compose } from "redux";
import LogIn from "./LogIn.component";
import PopUpWrapper from "../PopUpWrapper/PopUpWrapper.component";


const LoginContainer = compose(
  PopUpWrapper
)(LogIn)

export default LoginContainer
