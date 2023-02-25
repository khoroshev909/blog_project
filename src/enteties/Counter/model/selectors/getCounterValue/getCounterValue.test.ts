import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import {
    counterReducer, CounterSchema, getCounterValue, counterActions,
} from 'enteties/Counter';

describe('getCounterValue.test', () => {
    test('get CounterValue selector', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 42 },
        };
        expect(getCounterValue(state as StateSchema)).toEqual(42);
    });

    test('increment', () => {
        const state: CounterSchema = {
            value: 10,
        };
        expect(counterReducer(state as CounterSchema, counterActions.increment)).toEqual({ value: 11 });
    });

    test('decrement', () => {
        const state: CounterSchema = {
            value: 10,
        };
        expect(counterReducer(state as CounterSchema, counterActions.decrement)).toEqual({ value: 9 });
    });

    test('increment with an empty state', () => {
        expect(counterReducer(undefined, counterActions.increment)).toEqual({ value: 1 });
    });
});
