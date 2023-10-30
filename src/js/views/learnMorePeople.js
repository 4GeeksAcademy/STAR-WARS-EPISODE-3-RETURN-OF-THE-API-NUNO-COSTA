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
		fetch("https://www.swapi.tech/api/people/" + params.PeopleId)
			.then(res => res.json())
			.then(data => {
				console.log("Hello 2")
				console.log(data)
				setPerson(data)
			})
			.catch(err => console.error(err))
	}, []);


	return (
		<div className="jumbotron container-lg">
			<div className="row d-flex">
				<div className="col-6"><img src="https://www.tennrand.com/wp-content/uploads/2015/04/800x600.gif" className="card-img-top" alt="..." /></div>
				<div className="col-6">
					<h1 className="display-4">{person.result?.properties?.name}</h1>
					<p className="fs-2 text-wrap">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. </p>
				</div>
			</div>
			<div className="mt-4 text-danger border-top border-danger row d-flex">
				<div className="col-2">
					<h5>Name</h5>
					<p>{person.result?.properties?.name}</p>
				</div>
				<div className="col-2">
					<h5>Birth Year</h5>
					<p>{person.result?.properties?.birth_year}</p>
				</div>
				<div className="col-2">
					<h5>Gender</h5>
					<p>{person.result?.properties?.gender}</p>
				</div>
				<div className="col-2">
					<h5>Height</h5>
					<p>{person.result?.properties?.height}</p>
				</div>
				<div className="col-2">
					<h5>Skin Color</h5>
					<p>{person.result?.properties?.skin_color}</p>
				</div>
				<div className="col-2">
					<h5>Eye Color</h5>
					<p>{person.result?.properties?.eye_color}</p>
				</div>
			</div>

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};
