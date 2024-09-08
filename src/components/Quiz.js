import React, { useState } from "react";

const Quiz = ({ questions }) => {
  const [quesNo, setQuesNo] = useState(0);
  const [optionNo, setOptionNo] = useState(-1);
  const [score, setScore] = useState(0);

  let initialState = Array.from({length:4}).map(_=>"unclicked")
  const [optionState, setOptionState] = useState(initialState)

  //console.log(optionState);

  function handleSubmit() {
    // if no option is selected return
    if (optionNo == -1) return;

    // if marked option is correct
    if (questions[quesNo].correct == questions[quesNo].options[optionNo]) {
      setScore(score + 1);
      
    } 
      setQuesNo(quesNo + 1);
      setOptionNo(-1);
      setOptionState(initialState)
    
  }

  return (
    <>
      {quesNo < questions.length ? (
        <div className="ques">
          <div>{questions[quesNo].question}</div>

          {questions[quesNo].options.map((option, index) => {
            return (
              <div
                className="option"
                style={{ backgroundColor: optionState[index]==="hovered" ? "yellow" : optionState[index] === "clicked" ? "green" : "white", cursor: "pointer", 
                marginBottom:"50px"
                }}

                key={index}
                onClick={() => {
                  setOptionNo(index);
                  let newOptionState = optionState.map((state)=> state === "clicked" ? "unclicked" : state )
                  setOptionState([...newOptionState.slice(0,index),"clicked",...newOptionState.slice(index+1)]);
                  
                }}
                onMouseEnter={() => {
                  setOptionState([...optionState.slice(0,index),"hovered",...optionState.slice(index+1)]);
                  //console.log([...optionState.slice(0,index),"unclicked",...optionState.slice(index)])
                  
                }}
                onMouseLeave={() => {
                  if(optionState[index] !== "clicked")
                  setOptionState([...optionState.slice(0,index),"unclicked",...optionState.slice(index+1)]);
                  
                }}
              >
                {option}
              </div>
            );
          })}

          <button onClick={handleSubmit}>Next</button>
        </div>
      ) : (
        <div className="score">
          <div>Quiz Completed</div>
          <div>You scored {score} out of 2!</div>
        </div>
      )}
    </>
  );
};

export default Quiz;
