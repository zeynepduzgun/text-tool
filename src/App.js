import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import NavbarMenu from "./components/NavbarMenu/NavbarMenu";
import Generator from "./pages/Generator/Generator";
import Converter from "./pages/Converter/Converter";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavbarMenu sticky="top" />}>
          <Route path="generators" element={<Generator />} />
          <Route path="converters" element={<Converter />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
