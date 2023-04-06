import { createPortal } from 'react-dom';
export var Portal = function (props) {
    var children = props.children, _a = props.elem, elem = _a === void 0 ? document.body : _a;
    return createPortal(children, elem);
};
