import { useState } from "react";
import "./App.css";
import Main from "./components/Main/Main";
import { useContext } from "react";
import { CountryContext } from "./CountryContext";

function App() {
  const { names, setNames, country, setCountry } = useContext(CountryContext);

  const getName = (item) => {
    const { id, name, url, checked } = item;
    setCountry({ id, name, url, checked });
  };

  return (
    <>
      <Main names={names} setNames={setNames} getName={getName} />
    </>
  );
}

export default App;
