import React from "react";

const Detail = ({detail}) => { 
 
  return (
   <>    
   {detail &&
      <div className="sidebar">
        <ul> Venue name: {detail.venueName}</ul>
        <ul> Surface name: {detail.surfaceName}</ul> 
        <ul> Status: {detail.status}</ul>
        <ul> Sport: {detail.sport}</ul>
      </div>  
      }
    </>
  );
   
 
  
};

export default Detail;