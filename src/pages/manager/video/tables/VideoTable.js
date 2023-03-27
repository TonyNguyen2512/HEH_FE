import React from 'react';

const VideoTable = (props) => (
    <table class="table table-bordered">
        <thead>
            <tr>
                <th>Video URL</th>
                <th>Thay đổi</th>
            </tr>
        </thead>
        <tbody>
            {props.videos.length > 0 ? (
                props.videos.map((video) => (
                    <tr key={video.videoID}>
                        <td>{video.videoURL}</td>
                        <td>
                            <button
                                onClick={() => {
                                    props.editRow(video);
                                }}
                                className="button muted-button"
                            >
                                Sửa
                            </button>
                            <button onClick={() => props.deleteVideo(video.videoID)} className="button muted-button">
                                Xóa
                            </button>
                        </td>
                    </tr>
                ))
            ) : (
                <tr>
                    <td colSpan={3}>Không có video</td>
                </tr>
            )}
        </tbody>
    </table>
);

export default VideoTable;
