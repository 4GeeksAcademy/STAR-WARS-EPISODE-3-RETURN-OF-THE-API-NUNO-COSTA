import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";



export const FavouriteDropdown = () => {
    const { store, actions } = useContext(Context);


    const handleDelete = (e, elementToDelete) => {
        e.preventDefault();
        e.stopPropagation();
        actions.deleteFavourite(elementToDelete)
        console.log("DELETE")
    }


    return (
        <div class="dropdown">
            <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Favourites
            </button>
            <ul class="dropdown-menu">
                {store.favourites.map((element, idx) => {
                    return (
                        <li key={element.uid} className="d-flex justify-content-between align-items-center">
                            <a className="dropdown-item py-2 fw-bold" href="#"> {element.name} </a>
                                <i className="fas fa-trash-alt" onClick={(e) => handleDelete(e, element)}></i>
                        </li>
                    )
                })
                }
            </ul>
        </div>)
}