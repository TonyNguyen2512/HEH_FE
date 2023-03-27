import { useState } from 'react';

const AddTypeOfFeeForm = (props) => {
    const initialFormState = { serviceCharge: '' };
    const [typeOfFee, setTypeOfFee] = useState(initialFormState);

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setTypeOfFee({ ...typeOfFee, [name]: value });
    };

    const handleSelectChange = (event) => {
        const { name, value } = event.target;

        setTypeOfFee({ ...typeOfFee, [name]: value === 'true' });
    };
    console.log(typeOfFee);
    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                if (!typeOfFee.typeOfFeeName || !typeOfFee.typeOfFeeTimePerWeek) return;
                props.addTypeOfFee(typeOfFee);
                setTypeOfFee(initialFormState);
            }}
        >
            <label htmlFor="serviceCharge">serviceCharge</label>
            <input type="text" id="serviceCharge" name="serviceCharge" value={typeOfFee.serviceCharge} onChange={handleInputChange} />

            <button className="btn btn-info add-new">Add new type of fee</button>
        </form>
    );
};

export default AddTypeOfFeeForm;
