import React from 'react';
import s from "./Counter.module.css"

import {Display} from "../Display/Display";
import {Buttons} from "../Button/Buttons";


type  CounterPropsType = {
    num: number
    setNum: (num: number) => void
    minNum: number
    maxNum: number
    showValue:boolean
    setMaxNum: (maxNum: number) => void
    setMinNum: (minNum: number) => void
    setShowValue:(showValue:boolean)=>void
}
export const Counter = (props: CounterPropsType) => {
    return (
        <div className={s.counter}>
            <Display num={props.num} setNum={props.setNum} minNum={props.minNum} maxNum={props.maxNum}

                     setMaxNum={props.setMaxNum} setMinNum={props.setMinNum}
                     setShowValue={props.setShowValue} showValue={props.showValue}/>
            <Buttons num={props.num} setNum={props.setNum} minNum={props.minNum} maxNum={props.maxNum}

                     setMaxNum={props.setMaxNum} setMinNum={props.setMinNum} showValue={props.showValue}/>
        </div>
    );
}
