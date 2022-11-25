import { useState } from "react";
import axios from "axios";

const url = `https://random-facts2.p.rapidapi.com/getfact`;

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "458d304e3bmsh5348829f8d379b1p138a54jsn0f0c995f2b45",
    "X-RapidAPI-Host": "random-facts2.p.rapidapi.com",
  },
};

export type factDataType = {
  data: string;
  Fact: string;
};

function Facts() {
  const [facts, setFact] = useState<factDataType[]>();
  let promises = [];

  for (let i = 0; i < 5; i++) {
    promises.push(axios.get<factDataType[]>(url, options));
  }

  Promise.all(promises).then((data) => console.log(data));

  //   console.log(facts);
  return (
    <div className="container">
      <h2>All Facts</h2>
      <div className="facts">{JSON.stringify(facts && facts.data)}</div>
    </div>
  );
}

export default Facts;
