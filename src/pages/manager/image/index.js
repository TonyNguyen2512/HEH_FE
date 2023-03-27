import useImage from 'api/image/action';
import { Fragment, useEffect, useState } from 'react';
import AddImageForm from './forms/AddImageForm';
import EditImageForm from './forms/EditImageForm';
import './index.css';
import ImageTable from './tables/ImageTable';

const Image = () => {
    const initialFormState = { id: null, imageURL: '' };

    // Setting state
    const [images, setImages] = useState([]);
    const [currentImage, setCurrentImage] = useState(initialFormState);
    const [editing, setEditing] = useState(false);
    const imageAction = useImage();

    // CRUD operations
    const addImage = (image) => {
        console.log(image);
        imageAction.createImage(image).then((res) => {
            const newImage = res.data;
            setImages([...images, newImage]);
        });
    };

    const deleteImage = (id) => {
        setEditing(false);
        imageAction.deleteImage(id).then(() => {
            setImages(images.filter((image) => image.imageID !== id));
        });
    };

    const updateImage = (updatedImage) => {
        setEditing(false);
        imageAction.updateImage(updatedImage).then((res) => {
            const updatedData = res.data;
            setImages(images.map((image) => (image.imageID === updatedData.imageID ? updatedData : image)));
        });
    };

    const editRow = (image) => {
        setEditing(true);

        setCurrentImage({
            imageID: image.imageID,
            imageURL: image.imageURL
        });
    };

    useEffect(() => {
        imageAction.getImages().then((response) => {
            const data = response.data;
            setImages(data);
        });
    }, []);
    return (
        <div className="container">
            <h1>Image Management</h1>
            <div className="flex-row">
                <div className="flex-large">
                    {editing ? (
                        <Fragment>
                            <h2>Edit image</h2>
                            <EditImageForm
                                editing={editing}
                                setEditing={setEditing}
                                currentImage={currentImage}
                                updateImage={updateImage}
                            />
                        </Fragment>
                    ) : (
                        <Fragment>
                            <h2>Add image</h2>
                            <AddImageForm addImage={addImage} />
                        </Fragment>
                    )}
                </div>
                <div className="flex-large">
                    <h2>View images</h2>
                    <ImageTable images={images} editRow={editRow} deleteImage={deleteImage} />
                </div>
            </div>
        </div>
    );
};

export default Image;
