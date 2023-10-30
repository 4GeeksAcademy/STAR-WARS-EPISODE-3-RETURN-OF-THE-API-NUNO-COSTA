import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { CardPeople, CardPerson } from "./cardPerson";

export const ListPeople = props => {
    const { store, actions } = useContext(Context);
    const { people } = store;



    const items = people.map((p, index) => <>
        <div className="d-flex-inline">
            <CardPerson data={p} key={index} />
            <div>
                <Link to={"/learnMorePeople/" + p.uid}>
                    <button type="button" className="btn btn-primary" >Learn More</button>
                </Link>
                <button type="button" className="btn btn-warning" onClick= {(e) => actions.addToFavorites(p,"people")}><i className="far fa-heart"></i></button>
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