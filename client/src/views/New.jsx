import React, { useState } from 'react';
import axios from 'axios';

import PetForm from '../components/PetForm';
import { navigate } from '@reach/router';

const New = (props) => {
    const initialPet = {
        name: '',
        type: '',
        desc: '',
        skillOne: '',
        skillTwo: '',
        skillThree: '',
    };

    const [pet, setPet] = useState(initialPet);

    const [errors, setErrors] = useState(initialPet);

    const handleInputChange = (e) => {
        setPet({
            ...pet,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        setErrors(initialPet);
        e.preventDefault();
        axios
            .post('http://localhost:8000/api/create/pet', pet)
            .then((res) => {
                if (res.data.results) {
                    setErrors(initialPet);
                    navigate('/');
                } else {
                    console.log(res.data);
                    setErrors(res.data);
                }
            })
            .catch((err) => console.log(err));
    };

    return (
        <div>
            <h2 className="mb-5">Add a Pet</h2>
            <PetForm
                inputs={pet}
                errors={errors}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                submitValue="Add"
            />
        </div>
    );
};

export default New;
