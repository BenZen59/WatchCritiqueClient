import './App.css';
import Header from './components/Header/Header';
import Carousel from './components/Carousel/Carousel';
import Film from './components/Film/Film';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AddList from './components/AddList/AddList';
import List from './components/List/List';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path='/' element={<Carousel />} />
          <Route path='/film' element={<Film />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/addlist' element={<AddList />} />
          <Route path='/list' element={<List />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
