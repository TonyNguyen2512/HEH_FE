import useCategory from 'api/category/action';
import { APP_API_URL } from 'config/config';
import { useEffect } from 'react';

const Account = () => {
    const categoryAction = useCategory();
    console.log(APP_API_URL);
    useEffect(() => {
        categoryAction.getCategories().then((response) => {
            const data = response.data;
            console.log(data);
        });
    }, []);
    return <div>Test API</div>;
};

export default Account;
