import React from "react";

const Modal = ({dataServer, selectItem}) => {

const styles = {
        position: "absolute",
        top: "50%",
        right: "20%",
        bottom: "20%",
        left: "20%",
        border: "1px solid",
        overflow: "auto",
        background: "#fff"
      };

return (
  <div style={styles}>
  {dataServer.map((item) => {  
    return (
        <tr key={item.id} onClick={()=> selectItem(item)}>
            <td >{item.venueName}</td>
            <td >{item.surfaceName}</td>
        </tr>
    );
    })
    }
  </div>
)}

export default Modal;
