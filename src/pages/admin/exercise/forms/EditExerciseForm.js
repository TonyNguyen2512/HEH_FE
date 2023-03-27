import React, { useState, useEffect } from 'react';

const EditExerciseForm = (props) => {
    const [exercise, setExercise] = useState(props.currentExercise);

    useEffect(() => {
        setExercise(props.currentExercise);
    }, [props]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setExercise({ ...exercise, [name]: value });
    };

    const handleSelectChange = (event) => {
        const { name, value } = event.target;

        setExercise({ ...exercise, [name]: value === 'true' });
    };

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();

                props.updateExercise(exercise);
            }}
            class="form-edit"
        >
            <label htmlFor="exerciseName">Tên</label>
            <input type="text" id="exerciseName" name="exerciseName" value={exercise.exerciseName} onChange={handleInputChange} />
            <label htmlFor="exerciseTimePerWeek">Ngày/tuần</label>
            <input
                type="text"
                id="exerciseTimePerWeek"
                name="exerciseTimePerWeek"
                value={exercise.exerciseTimePerWeek}
                onChange={handleInputChange}
            />
            <label htmlFor="flag">Gắn cờ</label>
            <select id="flag" name="flag" value={exercise.flag} onChange={handleSelectChange}>
                <option value={true} selected="selected">
                    Có
                </option>
                <option value={false}>Không</option>
            </select>
            <label htmlFor="status">Trạng thái</label>
            <select id="status" name="status" value={exercise.status} onChange={handleSelectChange}>
                <option value={true} selected="selected">
                    Mở
                </option>
                <option value={false}>Đóng</option>
            </select>
            <button className="button active-button">Cập nhật bài tập</button>
            <button onClick={() => props.setEditing(false)} className="button muted-button">
                Hủy
            </button>
        </form>
    );
};

export default EditExerciseForm;
