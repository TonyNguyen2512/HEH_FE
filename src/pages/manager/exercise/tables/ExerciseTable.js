import React from 'react';

const ExerciseTable = (props) => (
    <table class="table table-bordered">
        <thead>
            <tr>
                <th>Tên</th>
                <th>Ngày/tuần</th>
                <th>Gắn cờ</th>
                <th>Trạng thái</th>
                <th>Thay đổi</th>
            </tr>
        </thead>
        <tbody>
            {props.exercises.length > 0 ? (
                props.exercises.map((exercise) => (
                    <tr key={exercise.exerciseID}>
                        <td>{exercise.exerciseName}</td>
                        <td>{exercise.exerciseTimePerWeek}</td>
                        <td>{exercise.flag === true ? 'Có' : 'Không'}</td>
                        <td>{exercise.status === true ? 'Mở' : 'Đóng'}</td>
                        <td>
                            <button
                                onClick={() => {
                                    props.editRow(exercise);
                                }}
                                className="button muted-button"
                            >
                                Sửa
                            </button>
                            <button onClick={() => props.deleteExercise(exercise.exerciseID)} className="button muted-button">
                                Xóa
                            </button>
                        </td>
                    </tr>
                ))
            ) : (
                <tr>
                    <td colSpan={3}>Không có bài tập</td>
                </tr>
            )}
        </tbody>
    </table>
);

export default ExerciseTable;
