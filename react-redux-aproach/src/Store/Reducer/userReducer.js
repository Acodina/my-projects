import actions from "../Actions/actionTypes";
import { DEFAULT_DATA_SESION } from "../../Utils/utils";

export default function userReducer(state = DEFAULT_DATA_SESION, action) {
  switch (action.type) {
    case actions.CREATE_USER:
      return { user: action.data, authenticate: true };
    case actions.LOGOUT_USER:
      return action.data;
    default:
      return state;
  }
}
