import React, { useState, useEffect, useContext, navigate } from "react";
import PropTypes from "prop-types";
import { Link, redirect, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const Card = props => {
    const { store, actions } = useContext(Context);
    const [person, setPerson] = useState({});
    const [isFavorite, setIsFavorite] = useState(false);

    const handleToggleFavorite = (e) => {
        setIsFavorite(!isFavorite);
        e.preventDefault();
        actions.addFavourite(props.card)
    }



    return (
        <li style={{ listStyle: "none" }} className="me-3">
            <div className="card me-2" style={{ width: "18rem" }}>
                <img src="https://dummyimage.com/400x200" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                </div>
                <div>
                    <Link to={"/learnMorePeople/" + props.uid}>
                        <button type="button" className="btn btn-primary" >Learn More</button>
                    </Link>
                    <button type="button" className="btn btn-warning" onClick={handleToggleFavorite}><i className={isFavorite ? "fas fa-heart" : "far fa-heart"}></i></button>
                </div>
            </div>
        </li>


    )

};

