import { useState } from "react";
import axios from "axios";

const url = `https://uselessfacts.jsph.pl/random.json?language=en`;

// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "458d304e3bmsh5348829f8d379b1p138a54jsn0f0c995f2b45",
//     "X-RapidAPI-Host": "random-facts2.p.rapidapi.com",
//   },
// };

export type factDataType = {
  data: string;
  Fact: string;
};

function Home() {
  const [facts, setFact] = useState<factDataType[]>();
  const handleClick = async () => {
    const data = await axios.get<factDataType[]>(url);
    setFact(data);
  };

  console.log(facts);
  return (
    <div className="container">
      <h2>Get your Random Facts Here!</h2>
      <button onClick={handleClick}>Get Fact</button>
      <div className="facts">{JSON.stringify(facts && facts.data.text)}</div>
    </div>
  );
}

export default Home;
