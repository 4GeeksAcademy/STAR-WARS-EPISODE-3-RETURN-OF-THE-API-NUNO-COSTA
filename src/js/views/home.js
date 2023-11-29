import React, { useContext, useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Card } from "../component/card";

export const Home = () => {

	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.loadPeople();
		actions.loadVehicles();
		actions.loadPlanets();
	}, []);

	return (
		<>
			<div className="text-center mt-5 jumbotron overflow-scroll d-flex container-fluid">
				{store.people.map((p, index) => {
					return (
						<Card
							key={index}
							name={p.name}
							uid={p.uid}
							item={p}
						/>
					);
				})}
			</div>
			<div className="text-center mt-5 jumbotron overflow-scroll d-flex container-fluid">
				{store.planets.map((p, index) => {
					return (
						<Card
							key={index}
							name={p.name}
							uid={p.uid}
						/>
					);
				})}
			</div>
			<div className="text-center mt-5 jumbotron overflow-scroll d-flex container-fluid">
				{store.vehicles.map((p, index) => {
					return (
						<Card
							key={index}
							name={p.name}
							uid={p.uid}
						/>
					);
				})}
			</div>
		</>
	);
}
