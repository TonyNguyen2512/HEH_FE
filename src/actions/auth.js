import { useHistory } from 'react-router-dom';

import { useAppDispatch } from '../hooks/redux-hooks';
import { login, logout } from '../store/reducers/auth';

import LocalStorageUtils from '../utils/LocalStorageUtils';

const useAuthAction = () => {
    const history = useHistory();
    const dispatch = useAppDispatch();
    const loginHandler = () => {
        const email = 'nguyenhathien2512@gmail.com';
        const phone = '0941866024';
        const token = '';
        const userId = '';
        const role = 'admin';
        const exp = 0;
        const image = '';
        const name = 'Nguyễn Hà Thiên';
        dispatch(login({ email, phone, name, image, role, exp, userId, token }));
        history.push('/admin');
    };
    // post({
    //     endpoint: '/api/authentication/auth',
    //     headers: { Authorization: `Bearer ${token}` }
    // }).then((response) => {
    //     if (response?.data?.isSuccess) {
    //         LocalStorageUtils.setUser(token);
    //         const { email, name, image, role, exp, userId, premium } = jwt_decode(token);
    //         dispatch(login({ email, name, image, role, exp, userId, token, premium }));
    //         if (role === 'admin') {
    //             history.push('/admin');
    //         } else {
    //             history.push('/study-sets');
    //         }
    //     } else {
    //         throw new Error('Something went wrong');
    //     }
    // });

    const logoutHandler = () => {
        LocalStorageUtils.deleteUser();
        dispatch(logout());
        history.push('/login');
    };

    const autoLoginHandler = () => {
        const token = LocalStorageUtils.getToken();
        const user = LocalStorageUtils.getUser();

        if (user && typeof user === 'object') {
            if (user?.exp && user?.exp * 1000 > Date.now()) {
                dispatch(
                    login({
                        token,
                        email: user.email,
                        phone: user.phone,
                        name: user.name,
                        image: user.image,
                        role: user.role,
                        exp: user.exp,
                        userId: +user.userId
                    })
                );
            } else {
                logoutHandler();
            }
        } else {
            dispatch(
                login({
                    token: null,
                    email: '',
                    phone: '',
                    name: '',
                    image: '',
                    role: '',
                    exp: 0,
                    userId: null
                })
            );
        }
    };

    return { loginHandler, logoutHandler, autoLoginHandler };
};

export default useAuthAction;
