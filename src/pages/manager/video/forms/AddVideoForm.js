import { useState } from 'react';

const AddVideoForm = (props) => {
    const initialFormState = { videoURL: '' };
    const [video, setVideo] = useState(initialFormState);

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setVideo({ ...video, [name]: value });
    };

    const handleSelectChange = (event) => {
        const { name, value } = event.target;

        setVideo({ ...video, [name]: value === 'true' });
    };
    console.log(video);
    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                if (!video.videoURL) return;
                props.addVideo(video);
                setVideo(initialFormState);
            }}
        >
            <label htmlFor="videoURL">Video URL</label>
            <input type="text" id="videoURL" name="videoURL" value={video.videoURL} onChange={handleInputChange} />
            <button className="btn btn-info add-new">Thêm video mới</button>
        </form>
    );
};

export default AddVideoForm;
