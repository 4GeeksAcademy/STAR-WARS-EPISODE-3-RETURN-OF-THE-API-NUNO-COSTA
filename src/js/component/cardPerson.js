import React, { useState, useEffect, useContext, navigate } from "react";
import PropTypes from "prop-types";
import { Link, redirect, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const CardPerson = props => {
    const { store, actions } = useContext(Context);
    const [person, setPerson] = useState({});

    useEffect(() => {
        fetch(props.data.url)
            .then(res => res.json())
            .then(data => {
                setPerson(data)
            })
            .catch(err => console.error(err))
    }, []);


    return (
        <li>
            <div className="card me-2" style={{ width: "18rem" }}>
                <img src="https://dummyimage.com/400x200" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{person.result?.properties?.name}</h5>
                    <div>
                        <p className="card-text">Gender: {person.result?.properties?.gender}</p>
                        <p className="card-text">Hair Color: {person.result?.properties?.hair_color}</p>
                        <p className="card-text">Eye Color: {person.result?.properties?.eye_color}</p>
                    </div>
                </div>
            </div>
        </li>


    )

};
