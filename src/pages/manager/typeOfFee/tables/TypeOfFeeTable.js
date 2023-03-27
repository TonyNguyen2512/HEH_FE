import React from 'react';

const TypeOfFeeTable = (props) => (
    <table class="table table-bordered">
        <thead>
            <tr>
                <th>Service Charge</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {props.typeOfFees.length > 0 ? (
                props.typeOfFees.map((typeOfFee) => (
                    <tr key={typeOfFee.typeOfFeeID}>
                        <td>{typeOfFee.serviceCharge}</td>
                        <td>
                            <button
                                onClick={() => {
                                    props.editRow(typeOfFee);
                                }}
                                className="button muted-button"
                            >
                                Edit
                            </button>
                            <button onClick={() => props.deleteTypeOfFee(typeOfFee.typeOfFeeID)} className="button muted-button">
                                Delete
                            </button>
                        </td>
                    </tr>
                ))
            ) : (
                <tr>
                    <td colSpan={3}>No type of fees</td>
                </tr>
            )}
        </tbody>
    </table>
);

export default TypeOfFeeTable;
