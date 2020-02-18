import { ILoginStateContext, ILoginActionsContext } from 'models/login';
import { LoginActions } from 'enums/index';

export function loginReducer (
    state: ILoginStateContext,
    action: ReduxActions.Action<ILoginActionsContext>
): ILoginStateContext{
    const { type, payload } = action;

    switch (type) {
        case LoginActions.LoginUser:
        case LoginActions.LoginUserSuccess:
        case LoginActions.LoginUserError:
        //#endregion
        return {
            ...state,
            ...payload,
        };

        default: {
            throw new Error(`Unhandled action type: ${type}`);
        }
    }
}