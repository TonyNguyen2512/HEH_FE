import { useState } from 'react';

const AddExerciseForm = (props) => {
    const initialFormState = { exerciseName: '', exerciseTimePerWeek: '', flag: true, status: true };
    const [exercise, setExercise] = useState(initialFormState);

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setExercise({ ...exercise, [name]: value });
    };

    const handleParse = (data) => {
        if (data.key === 'flag' || data.key === 'status') {
            return JSON.parse(data.value);
        }
        return data.value;
    };

    const handleSelectChange = (event) => {
        const { name, value } = event.target;

        setExercise({ ...exercise, [name]: value === 'true' });
    };
    console.log(exercise);
    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                if (!exercise.exerciseName || !exercise.exerciseTimePerWeek) return;
                props.addExercise(exercise);
                setExercise(initialFormState);
            }}
        >
            <label htmlFor="exerciseName">Tên</label>
            <input type="text" id="exerciseName" name="exerciseName" value={exercise.exerciseName} onChange={handleInputChange} />
            <label htmlFor="exerciseTimePerWeek">Ngày/tuần </label>
            <input
                type="number"
                id="exerciseTimePerWeek"
                name="exerciseTimePerWeek"
                value={exercise.exerciseTimePerWeek}
                onChange={handleInputChange}
            />
            <label htmlFor="flag">Gắn cờ</label>
            <select type="text" id="flag" name="flag" value={exercise.flag} onChange={handleInputChange}>
                <option value={true} selected="selected">
                    Có
                </option>
                <option value={false}>Không</option>
            </select>
            <label htmlFor="status">Trạng thái</label>
            <select type="text" id="status" name="status" value={exercise.status} onChange={handleInputChange}>
                <option value={true} selected="selected">
                    Mở
                </option>
                <option value={false}>Đóng</option>
            </select>
            <button className="btn btn-info add-new">Thêm bài tập mới</button>
        </form>
    );
};

export default AddExerciseForm;
