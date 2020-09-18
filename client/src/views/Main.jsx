import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';
import axios from 'axios';

const Main = () => {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:8000/api/pets')
            .then((res) => setPets(res.data.results))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            <h1 className="mb-5">All Shelter Pets:</h1>
            <table className="table table-dark col-8 mx-auto">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {pets.map((p, i) => {
                        return (
                            <tr key={i}>
                                <td className="vertical-align-center">
                                    {p.name}
                                </td>
                                <td className="vertical-align-center">
                                    {p.type}
                                </td>
                                <td className="vertical-align-center">
                                    {p.desc}
                                </td>
                                <td>
                                    <Link
                                        to={`/edit/${p._id}`}
                                        className="btn-sm btn-outline-warning mr-2"
                                    >
                                        Edit
                                    </Link>
                                    <Link
                                        to={`/pet/${p._id}`}
                                        className="btn-sm btn-warning"
                                    >
                                        Show
                                    </Link>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Main;
