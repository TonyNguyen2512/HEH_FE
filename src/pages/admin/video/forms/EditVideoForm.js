import React, { useState, useEffect } from 'react';

const EditVideoForm = (props) => {
    const [video, setVideo] = useState(props.currentVideo);

    useEffect(() => {
        setVideo(props.currentVideo);
    }, [props]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setVideo({ ...video, [name]: value });
    };

    const handleSelectChange = (event) => {
        const { name, value } = event.target;

        setVideo({ ...video, [name]: value === 'true' });
    };

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();

                props.updateVideo(video);
            }}
            class="form-edit"
        >
            <label htmlFor="videoURL">Video URL</label>
            <input type="text" id="videoURL" name="videoURL" value={video.videoURL} onChange={handleInputChange} />
            <button className="button active-button">Cập nhật video</button>
            <button onClick={() => props.setEditing(false)} className="button muted-button">
                Hủy
            </button>
        </form>
    );
};

export default EditVideoForm;
