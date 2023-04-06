import { jsx as _jsx } from "react/jsx-runtime";
import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from 'widgets/Sidebar';
import { renderComponent } from 'shared/lib/tests/renderComponent';
describe('Sidebar test', function () {
    test('Sidebar render', function () {
        renderComponent(_jsx(Sidebar, {}, void 0));
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
    test('Sidebar toggle', function () {
        renderComponent(_jsx(Sidebar, {}, void 0));
        var toggleBtn = screen.getByTestId('toggle-button');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
