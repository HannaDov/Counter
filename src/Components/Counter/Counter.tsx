import React from 'react';
import s from "./Counter.module.css"

import {Display} from "../Display/Display";
import {Buttons} from "../Button/Buttons";


type  CounterPropsType = {
    num: number
    setNum: (num: number) => void
    minNum: number
    maxNum: number
    setMaxNum: (maxNum: number) => void
    setMinNum: (minNum: number) => void
    setEnterValue: (enterValue: boolean) => void
    enterValue: boolean
}
export const Counter = (props: CounterPropsType) => {
    return (
        <div className={s.counter}>
            <Display num={props.num} setNum={props.setNum} minNum={props.minNum} maxNum={props.maxNum}

                     setMaxNum={props.setMaxNum} setMinNum={props.setMinNum}
                     enterValue={props.enterValue}
                     setEnterValue={props.setEnterValue}/>
            <Buttons num={props.num} setNum={props.setNum} minNum={props.minNum} maxNum={props.maxNum}

                     setMaxNum={props.setMaxNum} setMinNum={props.setMinNum}
                     enterValue={props.enterValue}
                     setEnterValue={props.setEnterValue}/>
        </div>
    );
}
