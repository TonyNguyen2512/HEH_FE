import React from 'react';

const CategoryTable = (props) => (
    <table class="table table-bordered">
        <thead>
            <tr>
                <th>Tên</th>
                <th>Mô tả</th>
                <th>Thay đổi</th>
            </tr>
        </thead>
        <tbody>
            {props.categories.length > 0 ? (
                props.categories.map((category) => (
                    <tr key={category.categoryID}>
                        <td>{category.categoryName}</td>
                        <td>{category.description}</td>
                        <td>
                            <button
                                onClick={() => {
                                    props.editRow(category);
                                }}
                                className="button muted-button"
                            >
                                Sửa
                            </button>
                            <button onClick={() => props.deleteCategory(category.categoryID)} className="button muted-button">
                                Xóa
                            </button>
                        </td>
                    </tr>
                ))
            ) : (
                <tr>
                    <td colSpan={3}>Không có danh mục</td>
                </tr>
            )}
        </tbody>
    </table>
);

export default CategoryTable;
