import React from "react";
import { Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { createUserAC } from "../../store/auth/actions";

const SignIn = () => {
  //JS
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //Отправить на статус авторизации
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    let response = await fetch("/auth/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: e.target[0].value,
        password: e.target[1].value,
      }),
    });
    let data = await response.json();

    dispatch(createUserAC(data));
    navigate('/game/new');
  };

  //Return Component
  return (
    <Form className='form'
      onSubmit={(e) => {
        onSubmitHandler(e);
      }}
    >
      <p className='title'>Sign In</p>
      <FormGroup>
        <Label className='title' for="username_signin">Username</Label>
        <Input className='input' name="username_signin" type="text" />
        <FormText>For instance: Vasya, Ivan, etc.</FormText>
      </FormGroup>
      <FormGroup>
        <Label className='title' for="password_signin">Password</Label>
        <Input className='input' name="password_signin" type="password" />
      </FormGroup>
      <Input className='inputsubmit' type="submit"></Input>
    </Form>
  );
};

export default SignIn;
