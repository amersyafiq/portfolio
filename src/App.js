import { useState } from "react";
import Main from "./Main";
import ModalPDF from "./ModalPDF";

function App() {
  const [show, setShow] = useState(false);

  const modalOpen = () => { setShow(true); }
  const modalClose = () => { setShow(false); }

  return (
    <div className="App">
        <Main modalOpen={modalOpen} />
        <ModalPDF show={show} modalClose={modalClose} />
    </div>
  );
}

export default App;
