import React from "react";
import { Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { createUserAC } from "../../store/auth/actions";
import './signup.css'

const SignUp = () => {
  //JS
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //Отправить на БЭК User
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    console.log(e.target[1].value);

    let response = await fetch("/auth/signup", {
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
      <p className='title'>Sign Up</p>
      <FormGroup>
        <Label className='title' for="username_signup">Username</Label>
        <Input className='input' name="username_signup" type="text" />
        <FormText>For instance: Vasya, Ivan, etc.</FormText>
      </FormGroup>
      <FormGroup>
        <Label className='title' for="password_signup">Password</Label>
        <Input className='input' name="password" type="password" />
      </FormGroup>
      <Input className='inputsubmit' type="submit"></Input>
    </Form>
  );
};

export default SignUp;
