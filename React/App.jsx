import Headers from "./component/training/Header";
import Flower from "./component/training/Flower";
import Course from "./component/training/Course";
import Game from "./component/training/Game";
import Animal from "./component/training/Animal";
import Training from "./component/training/Training";
import Football from "./component/training/Football";
import CheckNumber from "./component/training/CheckNumber";
import Ternary from "./component/training/Ternary";
import FriendsForMe from "./component/training/FriendsForMe";
import Divisions from "./component/training/divisibleby13";
import Length from "./component/training/Length";
import Multipleof3 from "./component/training/Multipleof3";
import Vowel from "./component/training/Vowel";
import Array from "./component/training/Array";
import Garage from "./component/training/Garage";
import "./App.css";
import Garages from "./component/training/Garages";
import NumberComponent from "./component/training/NumberComponent";
import IfElse from "./component/training/IfElse";
import CheckEligibility from "./component/training/CheckEligibility";
import StudentList from "./component/training/Student";
import Counter from "./component/training/Counter";
import { Func1, Func, Func2 } from "./component/training/component";
import ABComponent2 from "./component/training/ABComponent2";
import AB1_React from "./Demo";

function App() {
  //const [count, setCount] = useState(0)

  return (
    // <>
    //   <div>
    //     <a href="https://vite.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>;
    <>
      <Headers />
      <Flower name="Suhail" />
      <Course name="Information Technology" />
      <Animal />
      <Game />
      <Training />
      <Football />
      <CheckNumber num={34} />
      <FriendsForMe />
      <Ternary num={225} />
      <Divisions num={23} />
      <Length a={"hi"} />
      <Multipleof3 a={[7, 8, 0, 9]} />
      <Vowel a="aeiou" />
      <Array a={["Rose", "jasmine"]} />
      <Garage />
      <Garages />
      <NumberComponent num={54} />
      <IfElse num={48} />
      <CheckEligibility hasPan="yes" hasAadhar="yes" />
      <StudentList />
      <Counter />
      <Func />
  <Func1 />
  <Func2 />
  <ABComponent2 />
      <AB1_React />
    </>
  );
}

export default App;
