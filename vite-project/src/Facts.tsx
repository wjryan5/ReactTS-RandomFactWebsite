import { useState } from "react";
import axios from "axios";

const url = `https://uselessfacts.jsph.pl/random.json?language=en`;

export type factDataType = {
  data: string;
  Fact: string;
};

function Facts() {
  const [facts, setFact] = useState<factDataType[]>();
  let promises = [];

  for (let i = 0; i < 1; i++) {
    promises.push(axios.get<factDataType[]>(url));
  }

  Promise.all(promises).then((data) => console.log(data));

  //   console.log(facts);
  return (
    <div className="container">
      <h2>All Facts</h2>
      <div className="facts">{JSON.stringify(promises)}</div>
    </div>
  );
}

export default Facts;
