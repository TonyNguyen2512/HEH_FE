import { useState } from 'react';

const AddCategoryForm = (props) => {
    const initialFormState = { categoryName: '', description: '' };
    const [category, setCategory] = useState(initialFormState);

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setCategory({ ...category, [name]: value });
    };

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                if (!category.categoryName || !category.description) return;

                props.addCategory(category);
                setCategory(initialFormState);
            }}
        >
            <label htmlFor="categoryName">Tên</label>
            <input type="text" id="categoryName" name="categoryName" value={category.categoryName} onChange={handleInputChange} />
            <label htmlFor="description">Mô tả</label>
            <input type="text" id="description" name="description" value={category.description} onChange={handleInputChange} />
            <button className="btn btn-info add-new">Thêm danh mục mới</button>
        </form>
    );
};

export default AddCategoryForm;
