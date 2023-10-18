import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";



export const CardPlanet = props => {
    const { store, actions } = useContext(Context);
    const [planet, setplanet] = useState({});

    useEffect(() => {
        fetch(props.data.url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setplanet(data)
            })
            .catch(err => console.error(err))
    }, []);


    return (
        <li>
            <div className="card me-2" style={{ width: "18rem" }}>
                <img src="https://dummyimage.com/400x200" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{planet.result?.properties?.name}</h5>
                    <div>
                        <p className="card-text">Population: {planet.result?.properties?.population}</p>
                        <p className="card-text">Terrain: {planet.result?.properties?.terrain}</p>
                    </div>
                </div>
            </div>
        </li>


    )

};
