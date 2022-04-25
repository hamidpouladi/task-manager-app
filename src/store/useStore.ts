import { useContext } from 'react';
import { AppStateContext } from './context';

export default function useStore() {
  const state = useContext(AppStateContext);
  return state;
}
