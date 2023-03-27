import useTypeOfFee from 'api/typeOfFee/action';
import { Fragment, useEffect, useState } from 'react';
import AddTypeOfFeeForm from './forms/AddTypeOfFeeForm';
import EditTypeOfFeeForm from './forms/EditTypeOfFeeForm';
import './index.css';
import TypeOfFeeTable from './tables/TypeOfFeeTable';

const TypeOfFee = () => {
    const initialFormState = { id: null, serviceCharge: '' };

    // Setting state
    const [typeOfFees, setTypeOfFees] = useState([]);
    const [currentTypeOfFee, setCurrentTypeOfFee] = useState(initialFormState);
    const [editing, setEditing] = useState(false);
    const typeOfFeeAction = useTypeOfFee();

    // CRUD operations
    const addTypeOfFee = (typeOfFee) => {
        console.log(typeOfFee);
        typeOfFeeAction.createTypeOfFee(typeOfFee).then((res) => {
            const newTypeOfFee = res.data;
            setTypeOfFees([...typeOfFees, newTypeOfFee]);
        });
    };

    const deleteTypeOfFee = (id) => {
        setEditing(false);
        typeOfFeeAction.deleteTypeOfFee(id).then(() => {
            setTypeOfFees(typeOfFees.filter((typeOfFee) => typeOfFee.typeOfFeeID !== id));
        });
    };

    const updateTypeOfFee = (updatedTypeOfFee) => {
        setEditing(false);
        typeOfFeeAction.updateTypeOfFee(updatedTypeOfFee).then((res) => {
            const updatedData = res.data;
            setTypeOfFees(typeOfFees.map((typeOfFee) => (typeOfFee.typeOfFeeID === updatedData.typeOfFeeID ? updatedData : typeOfFee)));
        });
    };

    const editRow = (typeOfFee) => {
        setEditing(true);

        setCurrentTypeOfFee({
            typeOfFeeID: typeOfFee.typeOfFeeID,
            serviceCharge: typeOfFee.serviceCharge,
            status: typeOfFee.status
        });
    };

    useEffect(() => {
        typeOfFeeAction.getTypeOfFees().then((response) => {
            const data = response.data;
            setTypeOfFees(data);
        });
    }, []);
    return (
        <div className="container">
            <h1>TypeOfFee Management</h1>
            <div className="flex-row">
                <div className="flex-large">
                    {editing ? (
                        <Fragment>
                            <h2>Edit typeOfFee</h2>
                            <EditTypeOfFeeForm
                                editing={editing}
                                setEditing={setEditing}
                                currentTypeOfFee={currentTypeOfFee}
                                updateTypeOfFee={updateTypeOfFee}
                            />
                        </Fragment>
                    ) : (
                        <Fragment>
                            <h2>Add typeOfFee</h2>
                            <AddTypeOfFeeForm addTypeOfFee={addTypeOfFee} />
                        </Fragment>
                    )}
                </div>
                <div className="flex-large">
                    <h2>View typeOfFees</h2>
                    <TypeOfFeeTable typeOfFees={typeOfFees} editRow={editRow} deleteTypeOfFee={deleteTypeOfFee} />
                </div>
            </div>
        </div>
    );
};

export default TypeOfFee;
