import { useSelector } from 'react-redux';
import { getUserAuthData } from 'enteties/User';
import { Navigate } from 'react-router';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

export function RequireAuth({ children }: { children: JSX.Element }) {
    const isAuth = useSelector(getUserAuthData);

    if (!isAuth) {
        return <Navigate to={RoutePath.main} />;
    }
    return children;
}
