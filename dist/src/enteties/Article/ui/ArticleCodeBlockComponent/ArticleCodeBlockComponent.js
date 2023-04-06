import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import { Code } from 'shared/ui/Code/Code';
import cls from './ArticleCodeBlockComponent.module.scss';
export var ArticleCodeBlockComponent = memo(function (_a) {
    var className = _a.className, block = _a.block;
    return (_jsx(Code, { className: cls.ArticleCodeBlockComponent, text: block.code }, void 0));
});
