export interface Icredentials {
    username?: string;
    password?: string;
    isChecked?: boolean;
}

export interface ILoginStateContext {
    isLoggingIn?: boolean;
    isLoggedin?: boolean;
    loginSuccess?: boolean;
    userDetails?: {
        firstName?: string;
        lastName?: String;
    };
    loginError?: string;
    isFetchingUserDetails?: boolean;
    loginPayLoad?: Icredentials;
    loginSuccessResponse?: any;
    
}

export interface ILoginActionsContext {
    loginUser: (username: string, password: string, isChecked: boolean) => void;
}

export const defaultLogiContext: ILoginStateContext = {};