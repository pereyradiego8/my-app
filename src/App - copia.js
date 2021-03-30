import './App.css';
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListConteiner';
import ItemDetailContainer from "./components/ItemDetailConteiner";
import React from 'react';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemDetailContainer />
      <ItemListContainer />
    </div>
  );
}

export default App;