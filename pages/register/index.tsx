import React, { useState, FC } from 'react';
import './styles.scss';
import FormItem from 'antd/lib/form/FormItem';
import { Button, Input, Icon, Form } from 'antd';
import { useMutate } from 'restful-react';

interface Iprops {};

const base = "https://localhost:44352/api/Account";
export const Register: FC<Iprops> = () => {

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [confirm, setConfirm] = useState('');
    const handleSubmit = () => {
     console.log({email, password, confirm});
    const { mutate: Register } = useMutate({
      verb: "POST",
      path: `/Register`,
      base,
    });
  
    Register({ email, 
      password, 
      confirm,})
    .then(data => console.log(data))
    .catch(err => console.log(err.data))
    }
  return(
    <div className="register">
            <div className="base-container">
            <div className="header">TransportWise</div>
                <div className="header2">Register here:</div>
                <div className="image">
                    <img src="/static/images/town.png" />
                </div>
    <Form onSubmit={handleSubmit}>
    <FormItem>
      <Input
        prefix={<Icon type="mail" />}
        placeholder="Enter Email"
        required
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
    </FormItem> 

    <FormItem>
      <Input
        autoComplete="on"
        prefix={<Icon type="lock" />}
        placeholder="Password"
        required
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
    </FormItem>
    
    <FormItem>
      <Input
        autoComplete="on"
        prefix={<Icon type="lock" />}
        placeholder="Confirm Password"
        required
        type="password"
        value={confirm}
        onChange={e => setConfirm(e.target.value)}
      />
    </FormItem>

    <FormItem className="un-authed-btn-container">
      <Button
        type="primary"
        htmlType="submit"
        className="login-form-button"
        block
      >
        Register
      </Button>
      <div className="custom-form-item">
     <a href="/login">or Login</a>
    </div>
    </FormItem>

  
  </Form>
  </div>
  </div>
);
}

export default Register;