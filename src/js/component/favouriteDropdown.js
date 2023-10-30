import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";



export const FavouriteDropdown = () => {
    const { store, actions } = useContext(Context);


    return(
    <div class="dropdown">
        <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Favourites
        </button>
        <ul class="dropdown-menu">
            {store.favorites.map((item, index) => (
                <li className ="text-wrap" key={index}>{item.resourceData.name}<i className="fas fa-trash ms-1" onClick={(e) => {actions.removeFromFavorites(item)} }></i></li>
            ))}
        </ul>
    </div>)
}