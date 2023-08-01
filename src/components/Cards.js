import React from "react";
import { Link } from "react-router-dom";

const data = require("../fichiers.json");

function Cards() {
    return(
        <div className="card-container">
            {data.map((location) => {
                return(
                    <div key={location.id} className="card">
                        <Link to={`/Logement/${location.id}`} />
                        <img src={location.cover} alt={location.title} />
                        <div className="card-title">{location.title}</div>
                    </div>
                )}              
            )}
        </div>
    )
}

export default Cards