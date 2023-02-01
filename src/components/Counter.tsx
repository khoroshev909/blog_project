import React, {useState} from 'react';
import classes  from './Counter.module.scss'
export const Counter = () => {
    const [counter, setCounter] = useState<number>(9)

    const handleClick = () => {
        setCounter(prev  => prev + 1)
    }

    return (
        <div>
            <h1>{counter}</h1>
            <button className={classes.green} onClick={handleClick}>Add Counter</button>
        </div>
    );
};
