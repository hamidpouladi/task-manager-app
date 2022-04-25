import { createContext, Dispatch } from 'react';
import { AppState } from '@/types';
import { TaskActions } from './actions/task';

export const appInitialState: AppState = {
  tasks: [],
};

export const AppStateContext = createContext<AppState>(appInitialState);
AppStateContext.displayName = 'AppStateCtx';
export const AppDispatchContext = createContext<
  Dispatch<TaskActions> | undefined
>(undefined);
AppDispatchContext.displayName = 'AppDispatchCtx';
