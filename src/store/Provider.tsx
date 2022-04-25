import { useReducer, ReactNode } from 'react';
import {
  AppStateContext,
  AppDispatchContext,
  appInitialState,
} from './context';
import { AppState } from '@/types';
import { ADD_TASK, UPDATE_TASK, TaskActions } from './actions/task';

function appReducer(state: AppState, action: TaskActions): AppState {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.task] };

    case UPDATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((item) =>
          item.id === action.task.id ? action.task : item
        ),
      };

    default:
      return state;
  }
}

type StoreProps = {
  children: ReactNode;
};

function StoreProvider({ children }: StoreProps) {
  const [state, dispatch] = useReducer(appReducer, appInitialState);
  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
}

export default StoreProvider;
