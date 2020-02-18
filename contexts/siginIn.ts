import { createContext } from 'react';
import {ILoginStateContext, defaultLogiContext, ILoginActionsContext} from 'models/login';

export const LoginStateContext= createContext<ILoginStateContext>(defaultLogiContext);

export const LoginActionsContext = createContext<ILoginActionsContext | undefined>(undefined);