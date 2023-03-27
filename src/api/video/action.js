import { get, post, put, remove } from '../../utils/ApiCaller';

const useVideo = () => {
    const getVideos = () => get({ endpoint: '/api/Video' });
    const deleteVideo = (videoId) =>
        remove({
            endpoint: `/api/Video/${videoId}`
        });

    const createVideo = (video) => post({ endpoint: '/api/Video', body: video });

    const updateVideo = (video) => put({ endpoint: '/api/Video', body: video });

    return {
        getVideos,
        updateVideo,
        deleteVideo,
        createVideo
    };
};
export default useVideo;
