import LocalStorageUtils from 'src/utils/LocalStorageUtils';

const authMiddleware = () => {
    const token = LocalStorageUtils.getItem('token');
    return !!token;
};

export default authMiddleware;
