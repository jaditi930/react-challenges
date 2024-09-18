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

// import Game from "./components/Game";

// const TOTAL_BOXES = 12;

// export default function App() {
//   return (
//     <div className="w-full h-screen flex justify-center items-center">
//       <Game total={TOTAL_BOXES} />
//     </div>
//   );
// }

// import { useNotifications } from "./components/Notifications";

// export default function App() {
//   const { showNotification } = useNotifications();

//   const handleClick = (e) => {
//     const { target } = e;
//     const type = target.getAttribute("data-type");

//     showNotification({
//       type,
//       message: `${type} Notification`,
//     });
//   };

//   return (
//     <div className="content">
//       <h1>Add Notification</h1>
//       <div className="actions">
//         <button className="info" onClick={handleClick} data-type="INFO">
//           Info
//         </button>
//         <button className="success" onClick={handleClick} data-type="SUCCESS">
//           Success
//         </button>
//         <button className="warning" onClick={handleClick} data-type="WARNING">
//           Warning
//         </button>
//         <button className="error" onClick={handleClick} data-type="ERROR">
//           Error
//         </button>
//       </div>
//     </div>
//   );
// }

// import React from "react";
// import Star from "./components/Star";

// const App = () => {
//   return <Star n={5} />;
// };

// export default App;

// import useTimer from "./hooks/useTimer.js";

// export default function App() {
//   const TOTAL_TIME = 5;
//   const { isRunning, start, stop, seconds } = useTimer(TOTAL_TIME);
//   return (
//     <div>
//       {isRunning && <div>{seconds}</div>}
//       {!isRunning && <div>No timer Running</div>}
//       <button disabled={isRunning} onClick={start}>
//         Start
//       </button>
//       <button disabled={!isRunning} onClick={stop}>
//         Stop
//       </button>
//     </div>
//   );
// }

import React from "react";
import {
  Accordian,
  AccordianContent,
  AccordianItem,
  AccordianToggle,
} from "./components/Accordian";

import ProgressBar from "./components/ProgressBar";
import MovingCircle from "./components/MovingCircle";
import CirclesGame from "./components/CircleGame";
import Pagination from "./components/Pagination";

export default function App() {
  return (
    // <Accordian>
    //   <AccordianItem id="1">
    //     <AccordianToggle>Is it Free?</AccordianToggle>
    //     <AccordianContent>
    //       Yes, the platform and YouTube both are completely free!
    //     </AccordianContent>
    //   </AccordianItem>
    //   <AccordianItem id="2">
    //     <AccordianToggle>Is it Free?</AccordianToggle>
    //     <AccordianContent>
    //       Yes, the platform and YouTube both are completely free!
    //     </AccordianContent>
    //   </AccordianItem>
    //   <AccordianItem id="3">
    //     <AccordianToggle>Is it Free?</AccordianToggle>
    //     <AccordianContent>
    //       Yes, the platform and YouTube both are completely free!
    //     </AccordianContent>
    //   </AccordianItem>
    // </Accordian>
    <Pagination
      default_page={3}
      pages_count={5}
      sibling_count={0}
      boundary_count={0}
    />
  );
}
