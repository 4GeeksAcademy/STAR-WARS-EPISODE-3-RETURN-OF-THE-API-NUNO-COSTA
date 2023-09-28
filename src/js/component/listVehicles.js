import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { CardVehicle } from "./cardVehicle";

export const ListVehicles = props => {
    const { store, actions } = useContext(Context);
    const { vehicles } = store;

    const items = vehicles.map((p, index) => <CardVehicle data={p} key ={index}/>)

    return (
        <div className="jumbotron">

            <hr className="my-4" />
            <ul className="d-inline-flex" style={{listStyle: "none"}}>{items}</ul>
        </div>
    );
};