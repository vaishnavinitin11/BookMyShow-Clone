import { Route } from "react-router-dom"

// HOC
import DefaultHOC from "./HOC/Default.HOC";

// Components
import Temp from "./components/temp";

function App() {
  return (
    <>
      <DefaultHOC path="/" exact components={Temp} />
    </>
  );
}

export default App;
