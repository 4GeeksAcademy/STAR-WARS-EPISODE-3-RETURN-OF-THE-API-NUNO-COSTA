import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { ListPeople } from "../component/listPeople";
import { ListPlanets } from "../component/listPlanets";
import { ListVehicles } from "../component/listVehicles";

export const Home = () => (
	<>
	<div className="text-center mt-5 jumbotron overflow-scroll">
		<ListPeople/>
	</div>
	<div className="text-center mt-5 jumbotron overflow-scroll">
		<ListPlanets/>
	</div>
	<div className="text-center mt-5 jumbotron overflow-scroll">
		<ListVehicles/>
	</div>
	</>
);
