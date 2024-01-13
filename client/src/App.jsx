import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SingleBook from './components/SingleBook';
import Books from './components/Books';
import Navigation from './components/Navigation';

function App() {

  return (
    <BrowserRouter>
      <div className="App px-0 pt-0 h-screen dark:text-white bg-white dark:bg-slate-800 rounded-lg ring-1 ring-slate-900/5 shadow-xl">
          <Navigation className='py-10'/>
          <main className='p-20'>
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/books' element={<Books />}></Route>
              <Route path='/books/:id' element={<SingleBook/>}></Route>
            </Routes>
          </main>
      </div>
    </BrowserRouter>
  );
}

export default App;