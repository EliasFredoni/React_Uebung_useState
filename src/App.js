import { useState } from 'react';   // DAS MUSS GEGEBEN SEIN, sonst funktioniert useState nicht!
import ArrayItem from './components/ArrayItem';
import './App.css';

function App() {

  const [count, setCount] = useState(0);  //HOOK useState initialwert setCount updatet.  ++ oder -- funktioniet nicht , da es verändert verden würde statt geupdatet
  const [light, setLight] = useState(true);
  const [text, setText] = useState("");
  const [arr, setArr] = useState([]);

  //Funktion

  let pushToArray = () => {
    let input = document.getElementById("inputText");
    //setArr(arr => [arr, input.value]); // funktioniert nicht gut, so wie es soll
    // spread operator kopiert den gesamten Inhalt von einem Array Objekt ... Punkt punkz punkt ist die Syntax von Spreat Operator
    setArr([...arr, input.value]); //geht auch so! bzw sollte so gemacht werden setArr(arr => [...arr, input.value])
  }

  console.log(arr);

  // ? Wenn : Dann (Z.B true or false)
  // onKeyDown ist auch eine Möglichkeit wie onChange 
  return (
    <div className="App" style={{ color: light ? 'black' : 'white', backgroundColor: light ? 'white' : 'black' }}>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <p>{count}</p>
      <button onClick={() => setCount(count - 1)}>-1</button>

      <button onClick={() => setLight(!light)}>change to {light ? 'Darkmode' : 'Lightmode'}</button>
      <input type="text" name="" id="" onChange={(e) => setText(e.target.value)} />
      <p>{text}</p>
      <button onClick={pushToArray}>push to Array</button>
      <input type="text" name="" id="inputText" />
      <ul>
        {arr.map((elt, i) =>
          <ArrayItem
            key={i}
            name={elt}
          />
        )}
      </ul>
    </div >
  );
}

export default App;
