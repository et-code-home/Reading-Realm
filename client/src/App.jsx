import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SingleBook from './components/SingleBook';
import Books from './components/Books';

function App() {

  return (
    <BrowserRouter>
      <div className="App dark:text-white bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
        <header className="App-header">
          <h1 className='text-sky-300'>Reading Realm</h1>
          <Routes>
             <Route path='/' element={<Home />}></Route>
            <Route path='/books' element={<Books />}></Route>
            <Route path='/books/:id' element={<SingleBook/>}></Route>
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;