import { memo } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions, getCounterValue } from 'enteties/Counter';

export const Counter = memo(() => {
    const dispatch = useDispatch();
    const value = useSelector(getCounterValue);
    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };
    return (
        <div>
            <h1 data-testid="counter-value">{value}</h1>
            <Button
                data-testid="counter-increment"
                onClick={increment}
            >
                +
            </Button>
            <Button
                data-testid="counter-decrement"
                onClick={decrement}
            >
                -
            </Button>
        </div>
    );
});
