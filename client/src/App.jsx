import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SingleBook from './components/SingleBook';
import Books from './components/Books';
import Navigation from './components/Navigation';

function App() {

  return (
    <BrowserRouter>
      <div className="App dark:text-white bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
          <Navigation />
            <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/books' element={<Books />}></Route>
            <Route path='/books/:id' element={<SingleBook/>}></Route>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;