import './App.css';
import Header from './components/Header/Header';
import Carousel from './components/Carousel/Carousel';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Carousel />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
