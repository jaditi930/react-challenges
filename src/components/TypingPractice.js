import React from "react";

const TypingPractice = () => {
  function handleChange(e) {
    console.log("called");
    let input = e.target.value;
    setInputText(input);
    let modified_color_array = [...currentColor];
    let last_letter = input.slice(-1);
    if (last_letter == para[currentLength]) {
      if (modified_color_array[currentLength - 1] != "red") {
        modified_color_array[currentLength] = "green";
        if (last_letter == " ") setInputText("");
      } else modified_color_array[currentLength] = "red";
    } else {
      modified_color_array[currentLength] = "red";
    }
    setCurrentLength(currentLength + 1);
    setCurrentColor(modified_color_array);
  }

  const para =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  const letters = para.split("");
  const [currentLength, setCurrentLength] = useState(0);
  const defaultColorArray = letters.map((_) => "black");
  const [currentColor, setCurrentColor] = useState(defaultColorArray);
  const [inputText, setInputText] = useState("");
  const paraContainer = letters.map((letter, index) => {
    return (
      <span
        key={index}
        style={{
          color: currentColor[index] == "green" ? "green" : "black",
          backgroundColor: currentColor[index] == "red" ? "red" : "white",
        }}
      >
        {letter}
      </span>
    );
  });

  function handleBackspace(e) {
    var key = e.keyCode || e.charCode;
    if (key === 8 || key === 46) {
      e.preventDefault(); // Prevent default backspace behavior to avoid deleting characters in the input

      const newLength = currentLength - 1;
      let modifiedColorArray = [...currentColor];
      modifiedColorArray[newLength] = "black";

      setCurrentLength(newLength);
      setCurrentColor(modifiedColorArray);
      setInputText(inputText.slice(0, -1));
    }
  }

  return (
    <div className="flex items-center justify-center w-full">
      <div className="w-1/2 p-8 border-2 border-red-400">
        <div>{paraContainer}</div>
        <input
          type="text"
          value={inputText}
          onChange={handleChange}
          className="border border-1 border-red-500"
          onKeyDown={handleBackspace}
        />
      </div>
    </div>
  );
};
export default TypingPractice;
