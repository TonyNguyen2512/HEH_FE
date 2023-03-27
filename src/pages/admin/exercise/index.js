import useExercise from 'api/exercise/action';
import { Fragment, useEffect, useState } from 'react';
import AddExerciseForm from './forms/AddExerciseForm';
import EditExerciseForm from './forms/EditExerciseForm';
import './index.css';
import ExerciseTable from './tables/ExerciseTable';

const Exercise = () => {
    const initialFormState = { id: null, name: '', exerciseTimePerWeek: '', flag: true, status: true };

    // Setting state
    const [exercises, setExercises] = useState([]);
    const [currentExercise, setCurrentExercise] = useState(initialFormState);
    const [editing, setEditing] = useState(false);
    const exerciseAction = useExercise();

    // CRUD operations
    const addExercise = (exercise) => {
        exercise = { ...exercise, flag: JSON.parse(exercise['flag']), status: JSON.parse(exercise['status']) };
        console.log(exercise);
        exerciseAction.createExercise(exercise).then((res) => {
            const newExercise = res.data;
            setExercises([...exercises, newExercise]);
        });
    };

    const deleteExercise = (id) => {
        setEditing(false);
        exerciseAction.deleteExercise(id).then(() => {
            setExercises(exercises.filter((exercise) => exercise.exerciseID !== id));
        });
    };

    const updateExercise = (updatedExercise) => {
        setEditing(false);
        exerciseAction.updateExercise(updatedExercise).then((res) => {
            const updatedData = res.data;
            setExercises(exercises.map((exercise) => (exercise.exerciseID === updatedData.exerciseID ? updatedData : exercise)));
        });
    };

    const editRow = (exercise) => {
        setEditing(true);

        setCurrentExercise({
            exerciseID: exercise.exerciseID,
            exerciseName: exercise.exerciseName,
            exerciseTimePerWeek: exercise.exerciseTimePerWeek,
            flag: exercise.flag,
            status: exercise.status
        });
    };

    useEffect(() => {
        exerciseAction.getExercises().then((response) => {
            const data = response.data;
            setExercises(data);
        });
    }, []);
    return (
        <div className="container">
            <h1>Quản lý Bài tập</h1>
            <div className="flex-row">
                <div className="flex-large">
                    {editing ? (
                        <Fragment>
                            <h2>Cập nhật bài tập</h2>
                            <EditExerciseForm
                                editing={editing}
                                setEditing={setEditing}
                                currentExercise={currentExercise}
                                updateExercise={updateExercise}
                            />
                        </Fragment>
                    ) : (
                        <Fragment>
                            <h2>Thêm bài tập</h2>
                            <AddExerciseForm addExercise={addExercise} />
                        </Fragment>
                    )}
                </div>
                <div className="flex-large">
                    <h2>Danh sách các bài tập</h2>
                    <ExerciseTable exercises={exercises} editRow={editRow} deleteExercise={deleteExercise} />
                </div>
            </div>
        </div>
    );
};

export default Exercise;
