import { useEffect, useState } from "react";
import { Box } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";

import { formatFullName } from "../Utils/utils";
import { logout } from "../Store/Actions/userActions";

function Profile({ login, logout }) {
  const [userName, setUserName] = useState("");
  const { authenticate, user } = login;

  useEffect(() => {
    if (authenticate) {
      setUserName(formatFullName(user));
    }
    return;
  }, [user, authenticate]);

  return (
    <main className="profile">
      <Box>
        <img
          alt="Avatar del usuario"
          src="https://www.flaticon.es/svg/vstatic/svg/860/860733.svg?token=exp=1614679276~hmac=88c97e3f6b12894bc5e10f96f400699a"
        ></img>
        <span>{userName}</span>
      </Box>
      <Button onClick={logout} variant="contained" color="secondary">
        Desconectar
      </Button>
    </main>
  );
}

function mapStateToProps(state) {
  return { login: state.login };
}

const mapDispatchToProps = {
  logout,
};

const wrapper = connect(mapStateToProps, mapDispatchToProps);
const component = wrapper(Profile);

export default component;
