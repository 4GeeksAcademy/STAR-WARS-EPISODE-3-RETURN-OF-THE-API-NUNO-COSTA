import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";



export const FavouriteDropdown = () => {
    const { store, actions } = useContext(Context);


    return(
    <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Favourites
        </button>
        <ul class="dropdown-menu">
            {store.favourites.map((item, index) => (
                <li key={index}>{item.name}</li>
            ))}
        </ul>
    </div>)
}