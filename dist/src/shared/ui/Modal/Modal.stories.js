var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { THEMES } from 'app/providers/ThemeProvider';
import { Modal } from 'shared/ui/Modal/Modal';
export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};
var Template = function (args) { return _jsx(Modal, __assign({}, args), void 0); };
export var ModalLight = Template.bind({});
ModalLight.args = {
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    isOpen: true,
    onClose: function () { },
};
export var ModalDark = Template.bind({});
ModalDark.args = {
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    isOpen: true,
    onClose: function () { },
};
ModalDark.decorators = [ThemeDecorator(THEMES.DARK)];
