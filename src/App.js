import "./App.scss";
import NavbarMenu from "./components/NavbarMenu/NavbarMenu";

function App() {
  return (
    <div className="App">
      <NavbarMenu sticky="top" />
      <div className="text-edit-section"></div>
    </div>
  );
}

export default App;
