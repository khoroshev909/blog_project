import React, {
    ErrorInfo, PropsWithChildren, ReactNode, Suspense,
} from 'react';
import { ErrorAlert } from 'widgets/ErrorAlert';

interface ErrorState {
    hasError: boolean
}

export class ErrorBoundary extends React.Component<PropsWithChildren<ReactNode>, ErrorState> {
    constructor(props: PropsWithChildren<ReactNode>) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        // Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // Можно также сохранить информацию об ошибке в соответствующую службу журнала ошибок
        // eslint-disable-next-line no-console
        console.log('errorInfo ', errorInfo);
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;
        if (hasError) {
            // Можно отрендерить запасной UI произвольного вида
            // eslint-disable-next-line i18next/no-literal-string
            return <Suspense fallback=""><ErrorAlert /></Suspense>;
        }

        return children;
    }
}
