import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';

const Show = (props) => {
    const [pet, setPet] = useState({
        name: '',
        type: '',
        desc: '',
        skillOne: '',
        skillTwo: '',
        skillThree: '',
    });

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/pet/${props.id}`)
            .then((res) => setPet(res.data.results))
            .catch((err) => console.log(err));
    }, [props]);

    const destroyPet = () => {
        axios
            .delete(`http://localhost:8000/api/destroy/pet/${props.id}`)
            .then((res) => navigate('/'))
            .catch((err) => console.log(err));
    };

    return (
        <div className="mx-auto p-5 col-6 bg-dark text-warning">
            <h2>{pet.name}</h2>
            <p className="text-light mb-4">Type: {pet.type}</p>
            <p className="text-light mb-4">Description: {pet.desc}</p>
            <h3>Skills:</h3>
            <p className="text-light">{pet.skillOne}</p>
            <p className="text-light">{pet.skillTwo}</p>
            <p className="text-light">{pet.skillThree}</p>
            <button
                className="btn btn-success btn-outline-light m-5"
                onClick={destroyPet}
            >
                Adopt {pet.name}!
            </button>
        </div>
    );
};

export default Show;
