import { useState } from "react";
import Homepage from "./pages/homepage/Homepage";
import Videopage from "./pages/videopage/Videopage";
import {
  Container,
  Main,
  Wrapper,
  GlobalStyle,
} from "./pages/homepage/HomepageElements";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Menu from "./components/menu/Menu";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./utils/Theme";
import { useEffect } from "react";

function App() {
  const [darkMode, setDarkMode] = useState();
  const [openMenu, setOpenMenu] = useState(false);
  useEffect(() => {
    setDarkMode(localStorage.getItem("darkmode") == "dark" ? true : false);
  }, []);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Container>
        <Navbar
          setOpenMenu={setOpenMenu}
          openMenu={openMenu}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
        <BrowserRouter>
          <Routes>
            <Route
              exact
              path="/youtubeClone-client/"
              element={
                <Homepage darkMode={darkMode} setDarkMode={setDarkMode} />
              }
            />
            <Route
              path="/youtubeClone-client/watch/:id"
              element={
                <Videopage
                  openMenu={openMenu}
                  darkMode={darkMode}
                  setDarkMode={setDarkMode}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
