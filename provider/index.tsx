import { ReactNode, FC, useReducer } from 'react';
import {loginReducer} from './reducer';

import { useMutate } from 'restful-react';
import { loginUserAction, loginUserSuccessAction,  loginUserErrorAction} from './actions';
import { LoginStateContext, LoginActionsContext } from 'contexts/siginIn';



interface IProps {
    children?: ReactNode;
  }
  
  export const LoginProvider: FC<IProps> = ({ children }) => {
    const [state, dispatch] = useReducer(loginReducer, {});
  
    const { mutate: loginUserHttp } = useMutate({ verb: 'POST', path: '/Account/Login' });
  
    const loginUser = (username: string, password: string, isChecked: boolean) => {
      dispatch(
        loginUserAction({
          username,
          password,
          isChecked,
        })
      );
  
      loginUserHttp({
        email: username,
        password,
        rememberMe: isChecked,
      })
        .then(data => {
          dispatch(loginUserSuccessAction(data));
        })
        .catch(() => dispatch(loginUserErrorAction('Oops! Error')));
    };
  
    return (
        <LoginStateContext.Provider value={state}>
        <LoginActionsContext.Provider value={{ loginUser }}>{children}</LoginActionsContext.Provider>
      </LoginStateContext.Provider>
    );
  };
  
  export default LoginProvider;



