import './App.css';
import Header from './components/Header/Header';
import Carousel from './components/Carousel/Carousel';
import Film from './components/Film/Film';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Carousel />} />
          <Route path='/film' element={<Film />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
