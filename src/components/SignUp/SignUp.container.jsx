import PopUpWrapper from "../PopUpWrapper/PopUpWrapper.component";
import SignUp from "./SignUp.component";

import { compose } from "redux";

const SignUpContainer = compose(
  PopUpWrapper
)(SignUp);

export default SignUpContainer;
