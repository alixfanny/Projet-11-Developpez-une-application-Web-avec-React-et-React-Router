import React from "react";

function Tags({locations}) {
    return(
        <div className='tags'>
            {locations.map((tag, index) => (
                  <p key={index} className='tag'>{tag}</p>
                ))}
        </div>
    )
}

export default Tags