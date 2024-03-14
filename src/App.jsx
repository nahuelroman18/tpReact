import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import { ItemListContainer } from "./components/ItemListContainer";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting="hi" />;
    </>
  );
}

export default App;
