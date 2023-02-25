import { screen } from '@testing-library/react';
import { renderComponent } from 'shared/lib/tests/renderComponent';
import { Counter } from 'enteties/Counter/ui/Counter';

describe('Counter', () => {
    test('Render Counter', () => {
        renderComponent(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        expect(screen.getByTestId('counter-value')).toHaveTextContent('10');
    });

    test('Counter decrement', () => {
        renderComponent(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        screen.getByTestId('counter-decrement').click();
        expect(screen.getByTestId('counter-value')).toHaveTextContent('9');
    });

    test('Counter increment', () => {
        renderComponent(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        screen.getByTestId('counter-increment').click();
        expect(screen.getByTestId('counter-value')).toHaveTextContent('11');
    });
});
