import { get, post, put, remove } from '../../utils/ApiCaller';

const useExercise = () => {
    const getExercises = () => get({ endpoint: '/api/Exercise' });
    const deleteExercise = (exerciseId) =>
        remove({
            endpoint: `/api/Exercise/${exerciseId}`
        });

    const createExercise = (exercise) => post({ endpoint: '/api/Exercise', body: exercise });

    const updateExercise = (exercise) => put({ endpoint: '/api/Exercise', body: exercise });

    return {
        getExercises,
        updateExercise,
        deleteExercise,
        createExercise
    };
};
export default useExercise;
