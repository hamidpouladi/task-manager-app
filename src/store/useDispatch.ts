import { useContext } from 'react';
import { AppDispatchContext } from './context';

export default function useDispatch() {
  const dispatch = useContext(AppDispatchContext);
  if (typeof dispatch === 'undefined') {
    throw new Error('useDispatch hook must be used within a StoreProvider');
  }

  return dispatch;
}
