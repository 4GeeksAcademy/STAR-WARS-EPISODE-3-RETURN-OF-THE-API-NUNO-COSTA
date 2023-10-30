import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { CardVehicle } from "./cardVehicle";

export const ListVehicles = props => {
    const { store, actions } = useContext(Context);
    const { vehicles } = store;



    const items = vehicles.map((p, index) => <>
        <div className="d-flex-inline">
            <CardVehicle data={p} key={index} />
            <div>
                <Link to={"/learnMoreVehicles/" + p.uid}>
                    <button type="button" className="btn btn-primary" >Learn More</button>
                </Link>
                <button type="button" className="btn btn-warning" onClick= {(e) => actions.addToFavorites(p,"Vehicles")}><i className="far fa-heart"></i></button>
            </div>
        </div>
    </>
    )




    return (
        <div className="jumbotron d-flex">

            <hr className="my-4" />
            <ul className="d-inline-flex" style={{ listStyle: "none" }}>{items}</ul>
        </div>
    );
};