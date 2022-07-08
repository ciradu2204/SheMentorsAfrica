import { Route } from 'react-router-dom';
import './App.css';
import {Routes} from 'react-router-dom';
import AnauthLayout from './Components/Layout/unauthLayout';
import Home from './Components/Home';
import { createTheme, ThemeProvider } from '@material-ui/core';

const theme = createTheme({
    palette:{
      primary:{
        main: "#E49433", 
      }, 
      secondary:{
        main: "#408FAA"
      }, 
      error:{
        main: "#FE0000"
      }
    }
})

function App() {
  return (  
    <ThemeProvider theme={theme}>
    <AnauthLayout>
    <Routes>
     <Route exact path="/" component={Home}/>

    </Routes>
    </AnauthLayout>
    </ThemeProvider>
     
   
  );
}

export default App;
