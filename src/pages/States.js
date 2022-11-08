import React, { useState } from "react";
import { Button } from "react-bootstrap";

function States() {
  const [hitung, setHitung] = useState(0);
  const [movies, setMovies] = useState("pengabdi setan");

  const addHitung = () => {
    setHitung(hitung + 1);
  };

  const minHitung = () => {
    setHitung(hitung - 1);
  };

  const changeMovie = () => {
    setMovies("pengabdi adit");
  };

  return (
    <div>
      <h1>States : {hitung}</h1>
      <Button onClick={addHitung} variant="warning">
        Add
      </Button>
      {""}
      <Button onClick={minHitung} variant="danger">
        Min
      </Button>
      <br />
      <h1>film : {movies}</h1>
      <Button onClick={changeMovie} variant="primary">
        Change
      </Button>
    </div>
  );
}
export default States;
