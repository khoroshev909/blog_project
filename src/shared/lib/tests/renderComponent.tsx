import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18nTest from 'shared/config/i18n/i18nTest';
import { MemoryRouter } from 'react-router-dom';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';

export interface renderComponentOptions {
    route: string,
    initialState?: DeepPartial<StateSchema>
}
export function renderComponent(
    component: ReactNode,
    options: renderComponentOptions = { route: '/' },
) {
    const { route, initialState } = options;
    return render(
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider initialState={{}}>
                <I18nextProvider i18n={i18nTest}>
                    {component}
                </I18nextProvider>
            </StoreProvider>
        </MemoryRouter>,
    );
}
