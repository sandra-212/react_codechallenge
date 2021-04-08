import React from "react";
import Footer from "./Footer";

const Surfaces = ({data, selectItem, selectedItem}) => { 
    
 return (
     <div>
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th scope="col">Venue Name</th>
                    <th scope="col">Surface Name</th>
                    <th scope="col">Status</th>
                    <th scope="col">Sport</th>
                </tr>
            </thead>
        {data.map((item) => {  
                return (
                    <tr key={item.id}  onClick={()=> selectItem(item)} className = {selectedItem.id===item.id ? 'selected' : null}>
                        <td >{item.venueName}</td>
                        <td >{item.surfaceName}</td>
                        <td >{item.status}</td>
                        <td >{item.sport}</td>
                    </tr>
                );
            })
            }
        </table>
        
        <Footer matches ={data}/>
    </div>
    )
};

export default Surfaces;