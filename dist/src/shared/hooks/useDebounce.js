import { useRef } from "react";
export default function useDebounce(callback, delay) {
    var timer = useRef();
    if (timer.current) {
        clearTimeout(timer.current);
    }
    setTimeout(function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        callback.apply(void 0, args);
    }, delay);
}
