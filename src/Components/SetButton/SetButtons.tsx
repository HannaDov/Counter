import React from 'react';
import s from "../Button/Buttons.module.css"

type ButtonsPropsType = {
    minNum: number
    maxNum: number
    setMaxNum: (maxNum: number) => void
    setMinNum: (minNum: number) => void
    setNum: (num: number) => void
    setEnterValue:(enterValue:boolean)=>void
    enterValue:boolean
}
export const SetButtons = (props: ButtonsPropsType) => {
    const SetOnClickHandler = () => {
        localStorage.setItem('valueMaxNum', JSON.stringify(props.maxNum))
        localStorage.setItem('valueMinNum', JSON.stringify(props.minNum))
        props.setMinNum(props.minNum)
        props.setNum(props.minNum)
        props.setEnterValue(false)

    }

    return (
        <div className={s.buttons}>
            <button className={s.button}
                    disabled={props.minNum === props.maxNum || props.minNum < 0 || props.maxNum < 0 || props.maxNum < props.minNum||!props.enterValue}
                    onClick={SetOnClickHandler}>set
            </button>


        </div>
    );
};

