import { useReducer, ReactNode } from 'react';
import {
  AppStateContext,
  AppDispatchContext,
  appInitialState,
} from './context';
import { AppState } from '@/types';
import { ADD_TASK, UPDATE_TASK, TaskActions } from './actions/task';
import usePersistData from '@/hooks/usePersistData';

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

const LS_KEY = 'app_data';

// set initial state
const lazyInit = (initialState: AppState): AppState => {
  try {
    const item = window.localStorage.getItem(LS_KEY);
    return item ? JSON.parse(item) : initialState;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.warn(`Error reading localStorage key “${LS_KEY}”:`, error);
    return initialState;
  }
};

function StoreProvider({ children }: StoreProps) {
  const [state, dispatch] = useReducer(appReducer, appInitialState, lazyInit);
  usePersistData<AppState>(LS_KEY, state);
  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
}

export default StoreProvider;
