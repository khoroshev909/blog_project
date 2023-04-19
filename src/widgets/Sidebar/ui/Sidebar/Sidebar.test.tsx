import { fireEvent, screen } from '@testing-library/react';
import { renderComponent } from 'shared/lib/tests/renderComponent';
import { Sidebar } from './Sidebar';

describe('Sidebar test', () => {
    test('Sidebar render', () => {
        renderComponent(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('Sidebar toggle', () => {
        renderComponent(<Sidebar />);
        const toggleBtn = screen.getByTestId('toggle-button');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
