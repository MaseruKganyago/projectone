import React, {FC, useContext, useState} from 'react';
import './styles.scss';
import { Form, Icon, Input, Button, Checkbox, Alert } from 'antd';
import { LoginStateContext, LoginActionsContext } from 'contexts';


interface IProps {
  readonly form?: any;
};

export const SignIn: FC<IProps> = ({form}) => {
  const { isLoggingIn, loginError, loginSuccess, loginSuccessResponse } = useContext(LoginStateContext);
  const { loginUser } = useContext(LoginActionsContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleLoginClick = () => {
    loginUser(username, password, isChecked);
  };
  const { getFieldDecorator } = form;
  return(
    <div className="login">
      <div className="base-container">
      <div className="header">TransportWise</div>
      <div className="header2">Login</div>
      <div className="image">
        <img src="/static/images/town.png" />
        {loginError && <Alert message={loginError} type="error" showIcon />}
      {loginSuccess && <pre>{JSON.stringify(loginSuccessResponse, null, 2)}</pre>}
      </div>
      <Form>
      <Form.Item>
        {getFieldDecorator('username', {
          rules: [{ required: true, message: 'Please input your username!' }],
        })(
          <Input
            value={username}
            prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Username"
            onChange={e => setUsername(e.target.value)}
          />,
        )}
      </Form.Item>

      <Form.Item>
        {getFieldDecorator('password', {
          rules: [{ required: true, message: 'Please input your Password!' }],
        })(
          <Input
            autoComplete="on"
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />,
        )}
      </Form.Item>

      <Form.Item>
        {getFieldDecorator('remember', {
          valuePropName: 'unchecked',
        })(<Checkbox 
          value={isChecked}
          onClick={e => setIsChecked(e.target.value)}
        >Remember me</Checkbox>)}
        <a className="login-form-forgot" href="">
          Forgot password
          </a>
        <Button 
        type="primary" 
        htmlType="submit" 
        className="login-form-button"
        onClick={handleLoginClick}
        loading={isLoggingIn}
        >
          {isLoggingIn ? 'Signing in....' : 'Sign In'}
          Log in
          </Button>
        Or <a href="">register now!</a>
      </Form.Item>
      </Form>
      </div>
    </div>
  );
} 

export default SignIn;
