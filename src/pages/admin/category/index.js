import useCategory from 'api/category/action';
import { Fragment, useEffect, useState } from 'react';
import AddCategoryForm from './forms/AddCategoryForm';
import EditCategoryForm from './forms/EditCategoryForm';
import './index.css';
import CategoryTable from './tables/CategoryTable';

const Category = () => {
    // Data
    const categoriesData = [
        { id: 1, name: 'Tania', description: 'floppydiskette' },
        { id: 2, name: 'Craig', description: 'siliconeidolon' },
        { id: 3, name: 'Ben', description: 'benisphere' }
    ];

    const initialFormState = { id: null, name: '', description: '' };

    // Setting state
    const [categories, setCategories] = useState([]);
    const [currentCategory, setCurrentCategory] = useState(initialFormState);
    const [editing, setEditing] = useState(false);
    const categoryAction = useCategory();

    // CRUD operations
    const addCategory = (category) => {
        console.log(category);
        categoryAction.createCategory(category).then((res) => {
            const newCategory = res.data;
            setCategories([...categories, newCategory]);
        });
    };

    const deleteCategory = (id) => {
        setEditing(false);
        categoryAction.deleteCategory(id).then(() => {
            setCategories(categories.filter((category) => category.categoryID !== id));
        });
    };

    const updateCategory = (updatedCategory) => {
        setEditing(false);
        categoryAction.updateCategory(updatedCategory).then((res) => {
            const updatedCate = res.data;
            setCategories(categories.map((category) => (category.categoryID === updatedCate.categoryID ? updatedCate : category)));
        });
    };

    const editRow = (category) => {
        setEditing(true);

        setCurrentCategory({ categoryID: category.categoryID, categoryName: category.categoryName, description: category.description });
    };

    useEffect(() => {
        categoryAction.getCategories().then((response) => {
            const data = response.data;
            setCategories(data);
        });
    }, []);
    return (
        <div className="container">
            <h1>Quản lý Danh mục</h1>
            <div className="flex-row">
                <div className="flex-large">
                    {editing ? (
                        <Fragment>
                            <h2>Cập nhật danh mục</h2>
                            <EditCategoryForm
                                editing={editing}
                                setEditing={setEditing}
                                currentCategory={currentCategory}
                                updateCategory={updateCategory}
                            />
                        </Fragment>
                    ) : (
                        <Fragment>
                            <h2>Thêm danh mục</h2>
                            <AddCategoryForm addCategory={addCategory} />
                        </Fragment>
                    )}
                </div>
                <div className="flex-large">
                    <h2>Danh sách các danh mục</h2>
                    <CategoryTable categories={categories} editRow={editRow} deleteCategory={deleteCategory} />
                </div>
            </div>
        </div>
    );
};

export default Category;
