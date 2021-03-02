import { useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import { connect } from "react-redux";

import { formatFullName } from "../Utils/utils";

function Navbar({ login }) {
  const [userName, setUserName] = useState("");
  const { authenticate, user } = login;

  useEffect(() => {
    if (authenticate) {
      setUserName(formatFullName(user));
    } else {
      setUserName("Nuevo Usuario");
    }
    return;
  }, [user, authenticate]);
  return (
    <AppBar position="static" className="navbar" component="nav">
      {userName}
    </AppBar>
  );
}

function mapStateToProps(state) {
  return { login: state.login };
}

const wrapper = connect(mapStateToProps);
const component = wrapper(Navbar);

export default component;
