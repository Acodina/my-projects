import { useEffect, useState } from "react";
import { connect } from "react-redux";

import Profile from "../Components/Profile";
import Form from "../Components/Form";

function Home({ login }) {
  const [authenticate, setAuthenticate] = useState(false);

  useEffect(() => {
    setAuthenticate(login.authenticate);
  });

  return <main>{authenticate ? <Profile /> : <Form />}</main>;
}
function mapStateToProps(state) {
  return { login: state.login };
}

const wrapper = connect(mapStateToProps);
const component = wrapper(Home);

export default component;
