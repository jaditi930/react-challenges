import { useEffect, useState } from "react";
import Quiz from "./components/Quiz";
import "./App.css";

function App() {
  let questions_data = [
    {
      question: "What is the capital of France ?",
      options: ["Berlin", "London", "Brussels", "Paris"],
      correct: "Paris",
    },
    {
      question: "What is the capital of India ?",
      options: ["Indore", "New Delhi", "Chandigarh", "Ahemdabad"],
      correct: "Paris",
    },
  ];

  const [questions, setQuestions] = useState(questions_data);

  useEffect(() => {
    console.log("useeffect");

    // fetch("http://localhost:3000/data.json")

    // .then((response)=>response.json())

    // .then((data)=>{
    //   console.log(data)
    //   setQuestions(data)
    // })
  }, []);

  return (
    <>
      <Quiz questions={questions} />
    </>
  );
}

export default App;
