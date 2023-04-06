import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Text } from 'shared/ui/Text/Text';
export var Image = function (_a) {
    var className = _a.className, block = _a.block, title = _a.title;
    return (_jsxs(_Fragment, { children: [_jsx("img", { src: block.src, alt: block.title }, void 0), title && (_jsx(Text, { text: title }, void 0))] }, void 0));
};
