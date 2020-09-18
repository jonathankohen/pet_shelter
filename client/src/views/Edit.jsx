import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

import PetForm from '../components/PetForm';

const Edit = (props) => {
    const initialPet = {
        name: '',
        type: '',
        desc: '',
        skillOne: '',
        skillTwo: '',
        skillThree: '',
    };

    const [edit, setEdit] = useState(initialPet);

    const [errors, setErrors] = useState(initialPet);

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/pet/${props.id}`)
            .then((res) => setEdit(res.data.results))
            .catch((err) => console.log(err));
    }, [props]);

    const handleInputChange = (e) => {
        setEdit({
            ...edit,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        setErrors(initialPet);
        e.preventDefault();
        axios
            .put(`http://localhost:8000/api/update/pet/${props.id}`, edit)
            .then((res) => {
                if (res.data.results) {
                    navigate(`/pet/${props.id}`);
                } else {
                    setErrors(res.data);
                }
            })
            .catch((err) => console.log(err));
    };

    return (
        <div>
            <h2>Edit Pet:</h2>
            <PetForm
                inputs={edit}
                errors={errors}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                submitValue="Edit Pet"
            />
        </div>
    );
};

export default Edit;
