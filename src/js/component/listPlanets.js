import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { CardPlanet } from "./cardPlanet";

export const ListPlanets = props => {
    const { store, actions } = useContext(Context);
    const { planets } = store;

    const items = planets.map((p, index) => <>
        <div className="d-flex-inline">
            <CardPlanet data={p} key={index} />
            <div>
                <Link to={"/learnMorePlanets/" + index}>
                    <button type="button" className="btn btn-primary" >Learn More</button>
                </Link>
                <button type="button" className="btn btn-warning" onClick= {(e) => actions.addToFavourites(p,"planets")}><i className="far fa-heart"></i></button>
            </div>
        </div>
    </>
    )

    return (
        <div className="jumbotron">

            <hr className="my-4" />
            <ul className="d-inline-flex" style={{listStyle: "none"}}>{items}</ul>
        </div>
    );
};