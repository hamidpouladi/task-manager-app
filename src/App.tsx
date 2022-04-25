import BaseLayout from '@/layout/base';
import HomePage from '@/views/home';
import './App.css';

function App() {
  return (
    <div className="App">
      <BaseLayout>
        <HomePage />
      </BaseLayout>
    </div>
  );
}

export default App;
