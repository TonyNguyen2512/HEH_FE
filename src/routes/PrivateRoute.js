import { Redirect, Route } from 'react-router-dom';

import { useAppSelector } from '../hooks/redux-hooks';

const PrivateRoute = (props) => {
    const { role, ...rest } = props;
    const { role: authRole, email } = useAppSelector((state) => state.auth);
    if (!email) return <Redirect to="/login" />;

    if (role === 'admin') {
        if (authRole !== 'admin') return <Redirect to="/login" />;
    }

    if (role === 'manager') {
        if (authRole === 'manger') return <Redirect to="/manger" />;
    }

    if (role === 'user') {
        if (authRole === 'admin') return <Redirect to="/admin" />;
    }
    return <Route {...rest} />;
};

export default PrivateRoute;
