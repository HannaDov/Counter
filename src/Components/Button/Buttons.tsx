import React from 'react';
import s from "./Buttons.module.css"

type ButtonsPropsType = {
    num: number
    setNum: (num: number) => void
    minNum: number
    maxNum: number
    setMaxNum: (maxNum: number) => void
    setMinNum: (minNum: number) => void
    setEnterValue: (enterValue: boolean) => void
    enterValue: boolean
}
export const Buttons = (props: ButtonsPropsType) => {

    const incHandler = () => {
        props.setNum(props.num + 1)
    }
    const resetHandler = () => {
        props.setNum(0)

    }
    return (
        <div className={s.buttons}>
            <button onClick={incHandler} disabled={props.num === props.maxNum||props.minNum === props.maxNum || props.minNum < 0 || props.maxNum < 0 || props.maxNum < props.minNum||props.enterValue} className={s.button}>inc</button>
            <button onClick={resetHandler} disabled={props.minNum === props.maxNum || props.minNum < 0 || props.maxNum < 0 || props.maxNum < props.minNum||props.enterValue} className={s.button}> reset</button>

        </div>
    );
};

