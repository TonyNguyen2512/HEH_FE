import React from 'react';

const ImageTable = (props) => (
    <table class="table table-bordered">
        <thead>
            <tr>
                <th>Image URL</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {props.images.length > 0 ? (
                props.images.map((image) => (
                    <tr key={image.imageID}>
                        <td>{image.imageURL}</td>
                        <td>
                            <button
                                onClick={() => {
                                    props.editRow(image);
                                }}
                                className="button muted-button"
                            >
                                Edit
                            </button>
                            <button onClick={() => props.deleteImage(image.imageID)} className="button muted-button">
                                Delete
                            </button>
                        </td>
                    </tr>
                ))
            ) : (
                <tr>
                    <td colSpan={3}>No images</td>
                </tr>
            )}
        </tbody>
    </table>
);

export default ImageTable;
