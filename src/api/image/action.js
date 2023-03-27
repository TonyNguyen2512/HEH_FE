import { get, post, put, remove } from '../../utils/ApiCaller';

const useImage = () => {
    const getImages = () => get({ endpoint: '/api/Image' });
    const deleteImage = (imageId) =>
        remove({
            endpoint: `/api/Image/${imageId}`
        });

    const createImage = (image) => post({ endpoint: '/api/Image', body: image });

    const updateImage = (image) => put({ endpoint: '/api/Image', body: image });

    return {
        getImages,
        updateImage,
        deleteImage,
        createImage
    };
};
export default useImage;
