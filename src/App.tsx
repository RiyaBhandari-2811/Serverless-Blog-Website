import React, { lazy, Suspense, useState } from "react";
import "@scss/index.scss";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import { ThemeProvider } from "@mui/material";
import { darkTheme, lightTheme } from "./utils/theme";
const About = lazy(() => import("./pages/About"));
const Articles = lazy(() => import("./pages/Articles"));
const Tags = lazy(() => import("./pages/Tags"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App(): JSX.Element {
  const componentMap: {
    [key: string]: React.LazyExoticComponent<React.ComponentType<any>>;
  } = {
    about: About,
    articles: Articles,
    tags: Tags,
    contact: Contact,
  };

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.className = isDarkMode ? 'light-mode' : 'dark-mode';
  };
  

  const TagsPage = () => {
    // Get the dynamic tag from the URL
    const { dynamicSelectedTag } = useParams();
    return (
      <div>
        <h1>Showing results for: {dynamicSelectedTag}</h1>
        {/* Add the content for the selected tag here */}
      </div>
    );
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <button onClick={toggleTheme}>
        Toggle to {isDarkMode ? 'Light' : 'Dark'} Mode
      </button>
      <BrowserRouter>
        <NavBar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {Object.keys(componentMap).map((key) => {
              const Component = componentMap[key];
              return (
                <Route key={key} path={`/${key}`} element={<Component />} />
              );
            })}
            <Route path="/" element={<Home />} />
            <Route path="/tags/:dynamicSelectedTag" Component={TagsPage} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
