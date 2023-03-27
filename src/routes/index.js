// project import
import MainLayout from 'layout/MainLayout';
import { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Loader from '../components/Loader';
import MinimalLayout from '../layout/MinimalLayout';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const publicRoutes = [
    {
        component: lazy(() => import('../pages/authentication/Login')),
        path: '/login',
        name: 'login',
        layout: 'common'
    },
    {
        component: lazy(() => import('../pages/authentication/Register')),
        path: '/register',
        name: 'register',
        layout: 'common'
    },
    {
        component: lazy(() => import('../pages/Home')),
        path: '/',
        name: 'home'
    },
    {
        component: lazy(() => import('../pages/authentication/ForgetPassword')),
        path: '/forget-password',
        name: 'forget-password',
        layout: 'common'
    }
];

const privateRoutes = [
    {
        component: lazy(() => import('../pages/admin/dashboard')),
        path: '/admin',
        name: 'admin dashboard',
        layout: 'admin'
    },
    {
        component: lazy(() => import('../pages/manger/dashboard')),
        path: '/manager',
        name: 'manager dashboard',
        layout: 'admin'
    },
    {
        component: lazy(() => import('../pages/admin/account')),
        path: '/admin/account',
        name: 'account',
        layout: 'admin'
    },
    {
        component: lazy(() => import('../pages/admin/exercise')),
        path: '/admin/exercise',
        name: 'exercise',
        layout: 'admin'
    },
    {
        component: lazy(() => import('../pages/admin/category')),
        path: '/admin/category',
        name: 'category',
        layout: 'admin'
    },
    {
        component: lazy(() => import('../pages/admin/typeOfFee')),
        path: '/admin/typeOfFee',
        name: 'typeOfFee',
        layout: 'admin'
    },
    {
        component: lazy(() => import('../pages/admin/image')),
        path: '/admin/image',
        name: 'image',
        layout: 'admin'
    },
    {
        component: lazy(() => import('../pages/admin/video')),
        path: '/admin/video',
        name: 'video',
        layout: 'admin'
    },
    //// manager
    {
        component: lazy(() => import('../pages/manager/image')),
        path: '/admin/image',
        name: 'image',
        layout: 'manager'
    },
    {
        component: lazy(() => import('../pages/manager/video')),
        path: '/manager/video',
        name: 'video',
        layout: 'manager'
    }
];

const RouteList = (
    <Suspense fallback={<Loader />}>
        <Switch>
            {publicRoutes.map(({ layout, ...route }) => !layout && <PublicRoute key={route.name} exact={true} {...route} />)}
            <Route path="/admin">
                <MainLayout>
                    <Suspense fallback={<Loader />}>
                        <Switch>
                            {publicRoutes.map(
                                ({ layout, ...route }) => layout === 'admin' && <PublicRoute key={route.name} exact={true} {...route} />
                            )}
                            {privateRoutes.map(
                                ({ layout, ...route }) => layout === 'admin' && <PrivateRoute key={route.name} exact={true} {...route} />
                            )}
                            <Redirect to="/admin" />
                        </Switch>
                    </Suspense>
                </MainLayout>
            </Route>
            <Route>
                <MinimalLayout>
                    <Suspense fallback={<Loader />}>
                        <Switch>
                            {publicRoutes.map(
                                ({ layout, ...route }) => layout === 'common' && <PublicRoute key={route.name} exact={true} {...route} />
                            )}
                            {privateRoutes.map(
                                ({ layout, ...route }) => layout === 'common' && <PrivateRoute key={route.name} exact={true} {...route} />
                            )}
                            <Redirect to="/login" />
                        </Switch>
                    </Suspense>
                </MinimalLayout>
            </Route>
        </Switch>
    </Suspense>
);

export default RouteList;

// ==============================|| ROUTING RENDER ||============================== //
