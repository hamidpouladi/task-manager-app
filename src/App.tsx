import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BaseLayout from '@/layout/base';
import HomePage from '@/views/home';
import EditPage from '@/views/edit';
import NotFoundPage from '@/views/notFound';
import { StoreProvider } from '@/store';
import './App.css';

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <BaseLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="edit" element={<EditPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BaseLayout>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
