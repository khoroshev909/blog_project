import { jsx as _jsx } from "react/jsx-runtime";
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'enteties/User';
import { Navigate } from 'react-router';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
export function RequireAuth(_a) {
    var children = _a.children;
    var isAuth = useSelector(getUserAuthData);
    if (!isAuth) {
        return _jsx(Navigate, { to: RoutePath.main }, void 0);
    }
    return children;
}
