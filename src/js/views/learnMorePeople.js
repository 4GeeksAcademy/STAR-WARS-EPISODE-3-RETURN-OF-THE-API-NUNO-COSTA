import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";



export const LearnMorePeople = () => {
    const params = useParams();
	const [person, setPerson] = useState({});
	const { store, actions } = useContext(Context);
	const { people } = store;


	useEffect(() => {
        fetch("https://www.swapi.tech/api/people/" + params.theid)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setPerson(data)
            })
            .catch(err => console.error(err))
    }, []);
    

	return (
		<div className="jumbotron">
			<h1 className="display-4">{people[params.PeopleId].name}</h1>
			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};
