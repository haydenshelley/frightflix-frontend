import "./App.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter } from "react-router-dom";
import { Content } from "./Content";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Content />
      </BrowserRouter>
    </div>
  );
}

export default App;
