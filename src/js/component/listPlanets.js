import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { CardPlanet } from "./cardPlanet";

export const ListPlanets = props => {
    const { store, actions } = useContext(Context);
    const { planets } = store;

    const items = planets.map((p, index) => <CardPlanet data={p} key ={index}/>)

    return (
        <div className="jumbotron">

            <hr className="my-4" />
            <ul className="d-inline-flex" style={{listStyle: "none"}}>{items}</ul>
        </div>
    );
};