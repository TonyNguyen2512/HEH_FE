import React, { useState, useEffect } from 'react';

const EditTypeOfFeeForm = (props) => {
    const [typeOfFee, setTypeOfFee] = useState(props.currentTypeOfFee);

    useEffect(() => {
        setTypeOfFee(props.currentTypeOfFee);
    }, [props]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setTypeOfFee({ ...typeOfFee, [name]: value });
    };

    const handleSelectChange = (event) => {
        const { name, value } = event.target;

        setTypeOfFee({ ...typeOfFee, [name]: value === 'true' });
    };

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();

                props.updateTypeOfFee(typeOfFee);
            }}
            class="form-edit"
        >
            <label htmlFor="serviceCharge">Service Charge</label>
            <input type="text" id="serviceCharge" name="serviceCharge" value={typeOfFee.serviceCharge} onChange={handleInputChange} />

            <button className="button active-button">Update typeOfFee</button>
            <button onClick={() => props.setEditing(false)} className="button muted-button">
                Cancel
            </button>
        </form>
    );
};

export default EditTypeOfFeeForm;
