// // import { useEffect, useState } from "react";
// // import Quiz from "./components/Quiz";
// // import "./App.css";
// // import { Tabs, Tablist, Tab, TabIndicator,Tabpanels, Tabpanel } from "./components/Tabs";

// // function App() {
// //   let questions_data = [
// //     {
// //       question: "What is the capital of France ?",
// //       options: ["Berlin", "London", "Brussels", "Paris"],
// //       correct: "Paris",
// //     },
// //     {
// //       question: "What is the capital of India ?",
// //       options: ["Indore", "New Delhi", "Chandigarh", "Ahemdabad"],
// //       correct: "New Delhi",
// //     },
// //   ];

// //   const [questions, setQuestions] = useState(questions_data);

// //   useEffect(() => {
// //     console.log("useeffect");

// //     // fetch("http://localhost:3000/data.json")

// //     // .then((response)=>response.json())

// //     // .then((data)=>{
// //     //   console.log(data)
// //     //   setQuestions(data)
// //     // })
// //   }, []);

// //   return (
// //     <>
// //       <Tabs>
// //         <Tablist>
// //           <Tab>Home</Tab>
// //           <Tab>About us</Tab>
// //           <Tab>Start Quiz</Tab>
// //         </Tablist>
// //         <Tabpanels>
// //           <Tabpanel>
// //             <div>This is the home page.</div>
// //           </Tabpanel>
// //           <Tabpanel>
// //             <div>This is the about us page.</div>
// //           </Tabpanel>
// //           <Tabpanel>
// //           <Quiz questions={questions} />
// //           </Tabpanel>
// //         </Tabpanels>
// //         <TabIndicator />
// //       </Tabs>

// //     </>
// //   );
// // }

// // export default App;

// import React, { useEffect, useState } from "react";
// import { v4 as uuidv4 } from "uuid";
// import DirectoryStructure from "./components/DirectoryStructure";
// import useTree from "./hooks/useTree";
// import TrafficLights from "./components/TrafficLights";
// import SevenSegmentDisplay from "./components/SevenSegmentDisplay";
// import Game from "./components/Game"

// const App = () => {
//   const [tree, setTree] = useState({
//     id: uuidv4(),
//     name: "Directory Structure",
//     isFolder: true,
//     isOpen:true,
//     children: [
//       {
//         id: uuidv4(),
//         name: "src",
//         isFolder: true,
//         isOpen:false,
//         children:[
//           {
//             id: uuidv4(),
//             name: "components",
//             isFolder: true,
//           },
//           {
//             id: uuidv4(),
//             name: "abc.txt",
//             isFolder: false,
//           },
//         ]
//       },
//       {
//         id: uuidv4(),
//         name: "abc.txt",
//         isFolder: false,
//       },
//     ],
//   });
//   const [insertNode,renameNode,deleteNode] = useTree(tree);

//   const [hours,setHours] = useState(new Date().getHours())

//   const data =  {
//   "United States": "Washington, D.C.",
//   "Canada": "Ottawa",
//   "United Kingdom": "London",
//   "Germany": "Berlin",
//   "France": "Paris",
//   "Japan": "Tokyo",
//   "India": "New Delhi",
//   "Australia": "Canberra",
//   "Brazil": "Brasília"
// }

//   return (
//     // <div style={{ width: "30%" }}>
//     //   <DirectoryStructure root={tree} key={tree.id} insertNode={insertNode} renameNode={renameNode} deleteNode={deleteNode}/>
//     // </div>
//     // <div className="flex">
//     // <SevenSegmentDisplay digit={9}/>
//     // <SevenSegmentDisplay digit={0}/>
//     // </div>
//     //<TrafficLights/>
//     <Game data={data}/>
//   );
// };

// export default App;

import Game from "./components/Game";

const TOTAL_BOXES = 12;

export default function App() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Game total={TOTAL_BOXES} />
    </div>
  );
}
