import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Router, Link } from '@reach/router';
import Main from './views/Main';
import New from './views/New';
import Show from './views/Show';
import Edit from './views/Edit';

function App() {
    return (
        <div className="App">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
                <Link className="navbar-brand text-warning" to="/">
                    Pet Shelter
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">
                                Home <span className="sr-only">(current)</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/new">
                                Add a Pet
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <Router>
                <Main path="/" />
                <New path="/new" />
                <Show path="/pet/:id" />
                <Edit path="/edit/:id" />
            </Router>
        </div>
    );
}

export default App;
