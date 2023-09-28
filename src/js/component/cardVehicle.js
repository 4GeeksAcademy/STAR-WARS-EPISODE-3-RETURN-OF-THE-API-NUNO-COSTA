import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";


export const CardVehicle = props => {
    const [vehicle, setvehicle] = useState({});

    useEffect(() => {
        fetch(props.data.url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setvehicle(data)
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
                        <p className="card-text">Crew: {vehicle.result?.properties?.crew}</p>
                        <p className="card-text">Cost: {vehicle.result?.properties?.cost_in_credits}</p>
                        <p className="card-text">Length: {vehicle.result?.properties?.length}</p>
                    </div>
                    <div>
                        <Link to="/learnMore">
                            <button type="button" className="btn btn-primary" >Learn More</button>
                        </Link>
                        <button type="button" className="btn btn-warning">Warning</button>
                    </div>
                </div>
            </div>
        </li>


    )

};
