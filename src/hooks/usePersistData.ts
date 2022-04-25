import { useEffect } from 'react';

export default function usePersistData<T>(key: string, data: T): null {
  useEffect(() => {
    // Save to local storage
    window.localStorage.setItem(key, JSON.stringify(data));
  }, [data]);

  return null;
}
