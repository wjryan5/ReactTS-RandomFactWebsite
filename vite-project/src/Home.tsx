import React, { useState, useEffect } from "react";
import axios from "axios";

const url = `https://random-facts2.p.rapidapi.com/getfact`;

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "458d304e3bmsh5348829f8d379b1p138a54jsn0f0c995f2b45",
    "X-RapidAPI-Host": "random-facts2.p.rapidapi.com",
  },
};

function Home() {
  const [facts, setFact] = useState();

  const handleClick = async () => {
    const data = await axios.get(url, options);
    setFact(data);
  };

  console.log(facts);
  return (
    <div className="container">
      <h2>Get your Random Facts Here!</h2>
      <button onClick={handleClick}>Get Fact</button>
      <div>{JSON.stringify(facts && facts.data.Fact)}</div>
    </div>
  );
}

export default Home;
