import actionTypes from "./actionTypes";
import { DEFAULT_DATA_SESION } from "../../Utils/utils";

export function createUser(newUser) {
  return {
    data: newUser,
    type: actionTypes.CREATE_USER,
  };
}

export function logout() {
  return {
    data: DEFAULT_DATA_SESION,
    type: actionTypes.LOGOUT_USER,
  };
}
