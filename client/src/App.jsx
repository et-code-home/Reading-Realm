import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SingleBook from './components/SingleBook';
import Books from './components/Books';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <h1>Reading Realm</h1>
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