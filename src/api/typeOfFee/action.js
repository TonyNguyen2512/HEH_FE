import { get, post, put, remove } from '../../utils/ApiCaller';

const useTypeOfFee = () => {
    const getTypeOfFees = () => get({ endpoint: '/api/TypeOfFee' });
    const deleteTypeOfFee = (typeOfFeeId) =>
        remove({
            endpoint: `/api/TypeOfFee/${typeOfFeeId}`
        });

    const createTypeOfFee = (typeOfFee) => post({ endpoint: '/api/TypeOfFee', body: typeOfFee });

    const updateTypeOfFee = (typeOfFee) => put({ endpoint: '/api/TypeOfFee', body: typeOfFee });

    return {
        getTypeOfFees,
        updateTypeOfFee,
        deleteTypeOfFee,
        createTypeOfFee
    };
};
export default useTypeOfFee;
