import "./App.css";
import Size from "./Size.js";
import { useEffect, useState } from "react";

function App() {
  function useWindowSize() {
    const [size, setsize] = useState([window.innerHeight, window.innerWidth]);
    useEffect(() => {
      const handelsize = () => {
        setsize([window.innerHeight, window.innerWidth]);
      };
      window.addEventListener("resize", handelsize);

      return () => {
        window.removeEventListener("resize", handelsize);
      };
    }, []);

    return size;
  }

  

  return (
    <>
      <Size useWindowSize={useWindowSize} />
    </>
  );
}

export default App;