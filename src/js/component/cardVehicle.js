import React, { useState, useEffect, useContext, navigate } from "react";
import PropTypes from "prop-types";
import { Link, redirect, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const CardVehicle = props => {
    const { store, actions } = useContext(Context);
    const [vehicle, setVehicle] = useState({});

    useEffect(() => {
        fetch(props.data.url)
            .then(res => res.json())
            .then(data => {
                setVehicle(data)
                console.log(vehicle)
            })
            .catch(err => console.error(err))
    }, []);


    return (
        <li>
            <div className="card me-2" style={{ width: "18rem" }}>
                <img src="https://dummyimage.com/400x200" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{vehicle.result?.properties?.name}</h5>
                    <div>
                        <p className="card-text">Length: {vehicle.result?.properties?.length}</p>
                        <p className="card-text">Crew: {vehicle.result?.properties?.crew}</p>
                        <p className="card-text">Max Speed: {vehicle.result?.properties?.max_atmosphering_speed}</p>
                    </div>
                </div>
            </div>
        </li>


    )

};
