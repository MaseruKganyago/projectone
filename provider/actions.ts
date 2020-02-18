import {LoginActions} from 'enums/index';
import { createAction } from 'redux-actions';
import { ILoginStateContext, Icredentials } from 'models/login';

export const loginUserAction = createAction<ILoginStateContext, Icredentials>(
    LoginActions.LoginUser,
    loginPayLoad => ({
        isLoggingin: true,
        loginError: null,
        loginPayLoad,
        loginSuccess: null,
        })

);

export const loginUserSuccessAction = createAction<ILoginStateContext, any>(
    LoginActions.LoginUserSuccess,
    loginSuccessResponse => ({
        isLoggingIn: false,
        loginPayLoad: null,
        loginSuccess: true,
        loginSuccessResponse,
    })
);

export const loginUserErrorAction = createAction<ILoginStateContext, string>(
    LoginActions.LoginUserError,
    loginError => ({
        isLoggingIn: false,
        loginError,
    })
);