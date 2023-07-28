import React from "react";

const data = require("../fichiers.json");

function Cards() {
    return(
        <div className="card-container">
            {data.map((location) => (
                <div key={location.id} className="card">
                    <img src={location.cover} alt={location.title} />
                    <div className="card-title">{location.title}</div>
                </div>
            ))}
        </div>
    )
}

export default Cards