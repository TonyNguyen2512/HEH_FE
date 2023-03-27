import { useState } from 'react';

const AddImageForm = (props) => {
    const initialFormState = { imageURL: '' };
    const [image, setImage] = useState(initialFormState);

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setImage({ ...image, [name]: value });
    };

    const handleSelectChange = (event) => {
        const { name, value } = event.target;

        setImage({ ...image, [name]: value === 'true' });
    };
    console.log(image);
    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                if (!image.imageURL) return;
                props.addImage(image);
                setImage(initialFormState);
            }}
        >
            <label htmlFor="imageURL">Image URL</label>
            <input type="text" id="imageURL" name="imageURL" value={image.imageURL} onChange={handleInputChange} />
            <button className="btn btn-info add-new">Add new image</button>
        </form>
    );
};

export default AddImageForm;
