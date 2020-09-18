import React from 'react';

const PetForm = (props) => {
    const {
        inputs,
        errors,
        handleInputChange,
        handleSubmit,
        submitValue,
    } = props;

    return (
        <form className="col-5 mx-auto" onSubmit={handleSubmit}>
            <div className="form-group row">
                <label
                    className="col-sm-3 col-form-label text-left"
                    htmlFor="name"
                >
                    Name:
                </label>
                <div className="col-sm-9">
                    <input
                        type="text"
                        name="name"
                        value={inputs.name}
                        onChange={handleInputChange}
                        className="form-control"
                        placeholder="ex/ Professor Snuggles"
                    />
                    <span className="text-danger">
                        {errors.name ? errors.name.message : ''}
                    </span>
                </div>
            </div>
            <div className="form-group row">
                <label
                    className="col-sm-3 col-form-label text-left"
                    htmlFor="type"
                >
                    Type:
                </label>
                <div className="col-sm-9">
                    <input
                        type="text"
                        name="type"
                        value={inputs.type}
                        onChange={handleInputChange}
                        className="form-control"
                        placeholder="ex/ Cat"
                    />
                    <span className="text-danger">
                        {errors.type ? errors.type.message : ''}
                    </span>
                </div>
            </div>
            <div className="form-group row">
                <label
                    className="col-sm-3 col-form-label text-left"
                    htmlFor="desc"
                >
                    Description:
                </label>
                <div className="col-sm-9">
                    <input
                        type="desc"
                        name="desc"
                        value={inputs.desc}
                        onChange={handleInputChange}
                        className="form-control"
                        placeholder="ex/ Fuzzy"
                    />
                    <span className="text-danger">
                        {errors.desc ? errors.desc.message : ''}
                    </span>
                </div>
            </div>
            <div className="form-group row">
                <label
                    className="col-sm-3 col-form-label text-left"
                    htmlFor="weaponOne"
                >
                    Skill One:
                </label>
                <div className="col-sm-9">
                    <input
                        type="text"
                        name="skillOne"
                        value={inputs.skillOne}
                        onChange={handleInputChange}
                        className="form-control"
                        placeholder="(optional)"
                    />
                </div>
            </div>
            <div className="form-group row">
                <label
                    className="col-sm-3 col-form-label text-left"
                    htmlFor="skillTwo"
                >
                    Skill Two:
                </label>
                <div className="col-sm-9">
                    <input
                        type="text"
                        name="skillTwo"
                        value={inputs.skillTwo}
                        onChange={handleInputChange}
                        className="form-control"
                        placeholder="(optional)"
                    />
                </div>
            </div>
            <div className="form-group row">
                <label
                    className="col-sm-3 col-form-label text-left"
                    htmlFor="skillThree"
                >
                    Skill Three:
                </label>
                <div className="col-sm-9">
                    <input
                        type="text"
                        name="skillThree"
                        value={inputs.skillThree}
                        onChange={handleInputChange}
                        className="form-control"
                        placeholder="(optional)"
                    />
                </div>
            </div>
            <input
                type="submit"
                value={submitValue}
                className="btn btn-warning my-5"
            />
        </form>
    );
};

export default PetForm;
