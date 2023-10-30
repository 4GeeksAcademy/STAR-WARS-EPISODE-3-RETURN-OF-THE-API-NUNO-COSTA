import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";



export const LearnMorePlanets = () => {
	const params = useParams();
	const [planet, setplanet] = useState({});
	const { store, actions } = useContext(Context);
	const { planets } = store;


	useEffect(() => {
		fetch("https://www.swapi.tech/api/planets/" + params.PlanetsId)
			.then(res => res.json())
			.then(data => {
				console.log("Hello 2")
				console.log(data)
				setplanet(data)
			})
			.catch(err => console.error(err))
	}, []);


	return (
		<div className="jumbotron container-lg">
			<div className="row d-flex">
				<div className="col-6"><img src="https://www.tennrand.com/wp-content/uploads/2015/04/800x600.gif" className="card-img-top" alt="..." /></div>
				<div className="col-6">
					<h1 className="display-4">{planet.result?.properties?.name}</h1>
					<p className="fs-2 text-wrap">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. </p>
				</div>
			</div>
			<div className="mt-4 text-danger border-top border-danger row d-flex">
				<div className="col-2">
					<h5>Name</h5>
					<p>{planet.result?.properties?.name}</p>
				</div>
				<div className="col-2">
					<h5>Population</h5>
					<p>{planet.result?.properties?.population}</p>
				</div>
				<div className="col-2">
					<h5>Climate</h5>
					<p>{planet.result?.properties?.climate}</p>
				</div>
				<div className="col-2">
					<h5>Terrain</h5>
					<p>{planet.result?.properties?.terrain}</p>
				</div>
				<div className="col-2">
					<h5>Rotation Period</h5>
					<p>{planet.result?.properties?.rotation_period}</p>
				</div>
				<div className="col-2">
					<h5>Orbital Period</h5>
					<p>{planet.result?.properties?.orbital_period}</p>
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
