import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { categoryContextProvider } from './context/CartegoryContext';

//pages & components
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Category from './pages/Category';

function App() {
  return <div className="App">
<<<<<<< HEAD
    <categoryContextProvider>
      <BrowserRouter>
        <Navbar />
        <div className='pages'>
          <Routes>
            <Route path='/'
              element={<Home />}
            />
            <Route path='/category'
              element={<Category />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </categoryContextProvider>
=======
    <BrowserRouter>
      <Navbar />
      <div className='pages'>
        <Routes>
          <Route path='/'
            element={<Home />}
          />
          <Route path='/'
            element={<Category />}
          />
        </Routes>
      </div>
    </BrowserRouter>
>>>>>>> 18659ec0b1b5306b611b6d6afd779cacde46ded8
  </div>;
}

export default App;
