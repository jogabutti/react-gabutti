import './App.css';
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

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
      <NavBar/>
      <ItemListContainer greeting={"Productos"}/>
    </ThemeProvider>
  );
}

export default App;
