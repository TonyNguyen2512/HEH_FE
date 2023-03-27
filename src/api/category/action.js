import { get, post, put, remove } from '../../utils/ApiCaller';

const useCategory = () => {
    const getCategories = () => get({ endpoint: '/api/Category' });
    const deleteCategory = (categoryId) =>
        remove({
            endpoint: `/api/Category/${categoryId}`
        });

    const createCategory = (category) => post({ endpoint: '/api/Category', body: category });

    const updateCategory = (category) => put({ endpoint: '/api/Category', body: category });

    return {
        getCategories,
        updateCategory,
        deleteCategory,
        createCategory
    };
};
export default useCategory;
