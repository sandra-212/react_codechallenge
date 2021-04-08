import React from "react";


const DataMenu = ({selectTab}) => {
 
    return(
    <div className="nav nav-tabs">
        <button 
        onClick = {() => selectTab ("Surfaces")}
        >
            
              Surfaces
        </button>
        <button 
        onClick = {() => selectTab ("Servers")}
        > 
            
                Servers
        </button>
    </div>
    )
}

export default DataMenu;