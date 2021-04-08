import React from "react";

const NavBar = ({handleClickEmpty,handleClickData}) => {
    
    return (
    <div className="nav flex-column nav-pills"  aria-orientation="vertical">
        <button 
        className= "btn btn-outline-primary btn-sm w-60"  
        onClick = {handleClickEmpty}
        >
            Empty Tab
        </button>
        
        <button 
        className= "btn btn-outline-primary btn-sm w-60"  
        onClick = {handleClickData}
        >
            Data
        </button>
     </div>
    )
}

export default NavBar;