import React from 'react';
import s from "./Display.module.css"

type DisplayPropsType = {
    num: number
    setNum: (num: number) => void
    minNum: number
    maxNum: number
    showValue:boolean
     setMaxNum: (maxNum: number) => void
    setMinNum: (minNum: number) => void
    setShowValue:(showValue:boolean)=>void
}

export const Display = (props: DisplayPropsType) => {
    if (props.minNum === props.maxNum || props.minNum < 0 || props.maxNum < 0 || props.maxNum < props.minNum) {
        return <div className={s.display + ' ' + s.error}>Incorrect value!</div>

    }

    /*else if(props.minNum !== props.maxNum || props.minNum >= 0 || props.maxNum > 0 || props.maxNum > props.minNum){
        return <div className={s.display+' '+s.title}>Enter values!</div>
    }*/
    return (
        <div className={s.display}>
            <div className={props.num === 5 || props.num === props.maxNum ? s.disabled : ''}> {props.num
            }</div>

        </div>
    );
};

