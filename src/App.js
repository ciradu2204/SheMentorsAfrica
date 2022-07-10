import { Route } from "react-router-dom";
import "./App.css";
 import "./index.css";
import AnauthLayout from "./Components/Layout/unauthLayout";
import Home from "./Components/Home";
import { createTheme, ThemeProvider } from "@material-ui/core";
import SlideRoutes from "react-slide-routes";

const theme = createTheme({
  palette: {
    primary: {
      main: "#E49433",
    },
    secondary: {
      main: "#408FAA",
    },
    error: {
      main: "#FE0000",
    },
  },
});

function App() {
  // const [index, setIndex] = useState(0)
  // const changeIndex = (index) => {
  //   setIndex(index)
  // }

  return (
    <ThemeProvider theme={theme}>
      <AnauthLayout>
        <SlideRoutes>
          <Route exact path="/" element={<Home/>} />
        </SlideRoutes>
      </AnauthLayout>
    </ThemeProvider>
  );
}

export default App;
