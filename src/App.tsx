import BaseLayout from '@/layout/base';
import HomePage from '@/views/home';
import { StoreProvider } from '@/store';
import './App.css';

function App() {
  return (
    <StoreProvider>
      <BaseLayout>
        <HomePage />
      </BaseLayout>
    </StoreProvider>
  );
}

export default App;
