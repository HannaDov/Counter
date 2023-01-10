import React from 'react';
import s from "./SetCounter.module.css"

import {SetDisplay} from "../SetDisplay/SetDisplay";
import {SetButtons} from "../SetButton/SetButtons";


type  SetCounterPropsType = {
    num: number
    setNum: (num: number) => void
    minNum: number
    maxNum: number
    startNum: number
    setMaxNum: (maxNum: number) => void
    setMinNum: (minNum: number) => void


}
export const SetCounter = (props: SetCounterPropsType) => {
    return (
        <div className={s.counter}>
            <SetDisplay minNum={props.minNum} maxNum={props.maxNum} setMaxNum={props.setMaxNum}
                        setMinNum={props.setMinNum}/>
            <SetButtons minNum={props.minNum}
                        maxNum={props.maxNum} setNum={props.setNum}
                        setMaxNum={props.setMaxNum} setMinNum={props.setMinNum}/>
        </div>
    );
}
