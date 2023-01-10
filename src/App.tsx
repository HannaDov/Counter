import React, {useState} from 'react';

import './App.css';
import {Counter} from "./Components/Counter/Counter";
import {SetCounter} from "./Components/SetCounter/SetCounter";

function App() {
    const startNum = 0
    const [num, setNum] = useState<number>(startNum)
    //input state
    const [minNum, setMinNum] = useState<number>(0)
    const [maxNum, setMaxNum] = useState<number>(5)
    const [showValue, setShowValue]=useState<boolean>(false)


    return (
        <div className="App">
            <Counter num={num} setNum={setNum} minNum={minNum} maxNum={maxNum}

                     setMaxNum={setMaxNum} setMinNum={setMinNum} showValue={showValue}
                     setShowValue={setShowValue}
            />
            <SetCounter num={num} setNum={setNum} minNum={minNum} maxNum={maxNum}

                        setMaxNum={setMaxNum} setMinNum={setMinNum} startNum={startNum}/>

        </div>
    );
}

export default App;
