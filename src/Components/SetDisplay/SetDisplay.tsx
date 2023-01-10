import React, {ChangeEvent} from 'react';
import s from "./SetDisplay.module.css"

type DisplayPropsType = {
    minNum: number
    maxNum: number
    setMaxNum: (maxNum: number) => void
    setMinNum: (minNum: number) => void
}

export const SetDisplay = (props: DisplayPropsType) => {
    const MaxOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMaxNum(+e.currentTarget.value)
    }
    const MinOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMinNum(+e.currentTarget.value)
    }
    const displayStyleForMaxValue = `${props.minNum === props.maxNum || props.maxNum < 0 || props.maxNum < props.minNum ? s.errorInput : s.input}`
    const displayStyleForMinValue = `${props.minNum === props.maxNum || props.minNum < 0 || props.maxNum < props.minNum ? s.errorInput : s.input}`
    return (
        <div className={s.display}>
            <span className={s.text}>maxValue: </span><input type="number" value={props.maxNum}
                                                             onChange={MaxOnChangeHandler}
                                                             className={displayStyleForMaxValue}/>
            <span className={s.text}>minValue: </span><input type="number" value={props.minNum}
                                                             onChange={MinOnChangeHandler}
                                                             className={displayStyleForMinValue}/>

        </div>
    );
};

