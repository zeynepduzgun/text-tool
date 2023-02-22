import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Generator from "./pages/Generator/Generator";
import Converter from "./pages/Converter/Converter";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <RouterOutlet />
      <Footer />
    </>
  );
}

function RouterOutlet() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="generators" element={<Generator />} />
        <Route path="converters" element={<Converter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
