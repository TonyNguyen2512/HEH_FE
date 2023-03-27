import { Redirect, Route } from 'react-router-dom';

import { useAppSelector } from '../hooks/redux-hooks';

const HybridRoute = (props) => {
    const { component, ...rest } = props;
    const auth = useAppSelector((state) => state.auth);

    if (auth && auth.email && auth.role === 'admin') {
        return <Redirect to="/admin" />;
    }

    if (auth && auth.email && auth.role === 'manager') {
        return <Redirect to="/manager" />;
    }

    return <Route component={component} {...rest} />;
};

export default HybridRoute;
