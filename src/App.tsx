import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Main from "./pages/main/Main";
import About from "./pages/about/About";
import Project from "./pages/project/Project";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="about" element={<About />} />
          <Route path="profect" element={<Project />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
