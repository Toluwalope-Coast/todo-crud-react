import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { categoryContextProvider } from './context/CartegoryContext';

//pages & components
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Category from './pages/Category';

function App() {
  return <div className="App">
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

  </div>;
}

export default App;
