//@ts-check
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1B262C'
    },
    secondary: {
      light: '#000000',
      main: '#ffffff',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  }
});

const App = () => {
  return (
    <ThemeProvider theme={theme} >
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element ={<ItemListContainer greeting={"Productos"}/>}/>
          <Route path="/categorias/:id" element ={<ItemListContainer greeting={"Productos filtrados"}/>}/>
          <Route path="/productos/:id" element ={<ItemDetailContainer />}/>
          <Route path="/*" element ={<p> ERROR</p>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
