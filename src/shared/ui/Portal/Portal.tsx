import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children: ReactNode,
    elem?: Element
}
export const Portal = (props: PortalProps) => {
    const { children, elem = document.body } = props;
    return createPortal(children, elem);
};
