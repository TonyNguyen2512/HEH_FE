import React, { useState, useEffect } from 'react';

const EditCategoryForm = (props) => {
    const [category, setCategory] = useState(props.currentCategory);

    useEffect(() => {
        setCategory(props.currentCategory);
    }, [props]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setCategory({ ...category, [name]: value });
    };

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();

                props.updateCategory(category);
            }}
            class="form-edit"
        >
            <label htmlFor="categoryName">Tên</label>
            <input type="text" id="categoryName" name="categoryName" value={category.categoryName} onChange={handleInputChange} />
            <label htmlFor="description">Mô tả</label>
            <input type="text" id="description" name="description" value={category.description} onChange={handleInputChange} />
            <button className="button active-button">Cập nhật danh mục</button>
            <button onClick={() => props.setEditing(false)} className="button muted-button">
                Hủy
            </button>
        </form>
    );
};

export default EditCategoryForm;
