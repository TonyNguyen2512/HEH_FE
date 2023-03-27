import useVideo from 'api/video/action';
import { Fragment, useEffect, useState } from 'react';
import AddVideoForm from './forms/AddVideoForm';
import EditVideoForm from './forms/EditVideoForm';
import './index.css';
import VideoTable from './tables/VideoTable';

const Video = () => {
    const initialFormState = { id: null, videoURL: '' };

    // Setting state
    const [videos, setVideos] = useState([]);
    const [currentVideo, setCurrentVideo] = useState(initialFormState);
    const [editing, setEditing] = useState(false);
    const videoAction = useVideo();

    // CRUD operations
    const addVideo = (video) => {
        console.log(video);
        videoAction.createVideo(video).then((res) => {
            const newVideo = res.data;
            setVideos([...videos, newVideo]);
        });
    };

    const deleteVideo = (id) => {
        setEditing(false);
        videoAction.deleteVideo(id).then(() => {
            setVideos(videos.filter((video) => video.videoID !== id));
        });
    };

    const updateVideo = (updatedVideo) => {
        setEditing(false);
        videoAction.updateVideo(updatedVideo).then((res) => {
            const updatedData = res.data;
            setVideos(videos.map((video) => (video.videoID === updatedData.videoID ? updatedData : video)));
        });
    };

    const editRow = (video) => {
        setEditing(true);

        setCurrentVideo({
            videoID: video.videoID,
            videoURL: video.videoURL
        });
    };

    useEffect(() => {
        videoAction.getVideos().then((response) => {
            const data = response.data;
            setVideos(data);
        });
    }, []);
    return (
        <div className="container">
            <h1>Quản lý Video</h1>
            <div className="flex-row">
                <div className="flex-large">
                    {editing ? (
                        <Fragment>
                            <h2>Cập nhật video</h2>
                            <EditVideoForm
                                editing={editing}
                                setEditing={setEditing}
                                currentVideo={currentVideo}
                                updateVideo={updateVideo}
                            />
                        </Fragment>
                    ) : (
                        <Fragment>
                            <h2>Thêm video</h2>
                            <AddVideoForm addVideo={addVideo} />
                        </Fragment>
                    )}
                </div>
                <div className="flex-large">
                    <h2>Danh sách các video</h2>
                    <VideoTable videos={videos} editRow={editRow} deleteVideo={deleteVideo} />
                </div>
            </div>
        </div>
    );
};

export default Video;
