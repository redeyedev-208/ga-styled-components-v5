import React, { useState } from 'react';
import { PageLayout, Input } from 'components/common';
import styled from 'styled-components';

const Form = styled.form`
  width: 100%;
  max-width: 400px;
  background: white;
  border: 1px solid #eee;
  padding: 16px;
  box-sizing: border-box;
  color: black;
  border-radius: 4px;
`;

export default function Login() {
  // We are creating state for the form fields.
  // The initial state will be an empty string.
  // It is more efficient to use an object to store the form fields.
  const [formFields, setFormFields] = useState({
    username: '',
    password: '',
  });

  function handleInputChange(e) {
    e.persist(); // Being used in a callback, so we need to persist the event. (setFormFields)
    setFormFields((s) => ({
      ...s,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <PageLayout>
      <h1>Login</h1>
      <Form>
        <Input
          type='text'
          name='username'
          placeholder='Username'
          value={formFields.username}
          onChange={handleInputChange}
        />
        <Input
          type='password'
          name='password'
          placeholder='Password'
          value={formFields.password}
          onChange={handleInputChange}
        />
      </Form>
    </PageLayout>
  );
}
