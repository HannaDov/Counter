import React from 'react';
import s from "./Buttons.module.css"

type ButtonsPropsType = {
    num: number
    setNum: (num: number) => void
    minNum: number
    maxNum: number
    showValue: boolean
    setMaxNum: (maxNum: number) => void
    setMinNum: (minNum: number) => void
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
            <button onClick={incHandler} disabled={props.num === props.maxNum || props.showValue} className={s.button}>inc</button>
            <button onClick={resetHandler} className={s.button}> reset</button>

        </div>
    );
};

