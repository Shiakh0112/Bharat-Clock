import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Heading from "./components/Heading";
import Peragraph from "./components/Peragraph";
import Time from "./components/Time";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container text-center">
      <Heading />
      <Peragraph />
      <Time />
    </div>
  );
}

export default App;
