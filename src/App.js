import "./App.css";
import { Routes, Route } from "react-router-dom";
import Characters from "./pages/Characters";
import Character from "./pages/Character";
import Search from "./pages/Search";

function App() {
  return (
    <div className="App">
      <h1>Master graphQL and apollo client and react</h1>
      <Routes>
        <Route exact path="/" element={<Characters />} />
        <Route exact path="/search" element={<Search />} />
        <Route exact path="/:id" element={<Character />} />
      </Routes>
    </div>
  );
}

export default App;
