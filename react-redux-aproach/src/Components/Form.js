import { useEffect, useState } from "react";
import { FormGroup, FormLabel, Input } from "@material-ui/core";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";

import { createUser } from "../Store/Actions/userActions";
import { DEFAULT_DATA_SESION } from "../Utils/utils";

function Form({ createUser }) {
  const [newUser, setNewUser] = useState({ ...DEFAULT_DATA_SESION.user });

  useEffect(() => {
    console.log(newUser);
  });

  return (
    <main>
      <FormGroup>
        <FormLabel name="name" required>
          Nombre:{" "}
          <Input
            value={newUser.name}
            onChange={(event) => {
              setNewUser({ ...newUser, name: event.target.value });
            }}
            placeholder="Nombre"
          />
        </FormLabel>
        <FormLabel name="surnameOne" required>
          Primer Apellido:{" "}
          <Input
            value={newUser.surnameOne}
            onChange={(event) => {
              setNewUser({ ...newUser, surnameOne: event.target.value });
            }}
            placeholder="Primer Apellido"
          />
        </FormLabel>
        <FormLabel name="surnameTwo">
          Segundo Apellido:{" "}
          <Input
            value={newUser.surnameTwo}
            onChange={(event) => {
              setNewUser({ ...newUser, surnameTwo: event.target.value });
            }}
            placeholder="Segundo Apellido"
          />
        </FormLabel>
        <FormLabel name="age">
          Edad:{" "}
          <Input
            value={newUser.age}
            onChange={(event) => {
              setNewUser({ ...newUser, age: event.target.value });
            }}
            type="number"
            placeholder="Edad"
          />
        </FormLabel>
        <Button
          onClick={() => {
            createUser(newUser);
          }}
          variant="contained"
          color="primary"
        >
          Enviar
        </Button>
      </FormGroup>
    </main>
  );
}

function mapDispatchToProps(dispatch) {
  return { createUser: (newUser) => dispatch(createUser(newUser)) };
}

const wrapper = connect(null, mapDispatchToProps);
const component = wrapper(Form);

export default component;
