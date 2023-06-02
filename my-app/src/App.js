import logo from "./logo.svg";
import "./App.css";
import Topbar from "./components/Topbar/Topbar";
import Poster from "./components/Poster/Poster";

function App() {
  return (
    <div className="App">
      <Topbar />
      <Poster/>
    </div>
  );
}

export default App;
