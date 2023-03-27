import React, { useState, useEffect } from 'react';

const EditImageForm = (props) => {
    const [image, setImage] = useState(props.currentImage);

    useEffect(() => {
        setImage(props.currentImage);
    }, [props]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setImage({ ...image, [name]: value });
    };

    const handleSelectChange = (event) => {
        const { name, value } = event.target;

        setImage({ ...image, [name]: value === 'true' });
    };

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();

                props.updateImage(image);
            }}
            class="form-edit"
        >
            <label htmlFor="imageURL">Image URL</label>
            <input type="text" id="imageURL" name="imageURL" value={image.imageURL} onChange={handleInputChange} />
            <div>
                <img src={image.imageURL} alt={image.imageURL} />
            </div>
            <button className="button active-button">Update image</button>
            <button onClick={() => props.setEditing(false)} className="button muted-button">
                Cancel
            </button>
        </form>
    );
};

export default EditImageForm;
