import React from "react";
import { Link } from "react-router-dom";
import { FavouriteDropdown } from "../component/favouriteDropdown"

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3 d-flex justify-content-between">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>
			<div className=" me-5 ml-auto">
				<FavouriteDropdown/>
			</div>
		</nav>
	);
};
