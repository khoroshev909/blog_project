import { jsx as _jsx } from "react/jsx-runtime";
import { BrowserRouter } from 'react-router-dom';
export var RouteDecorator = function (Story) { return (_jsx(BrowserRouter, { children: _jsx(Story, {}, void 0) }, void 0)); };
