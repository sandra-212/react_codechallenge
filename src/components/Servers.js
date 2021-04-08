import React, {useState, useCallback, useEffect} from "react";
import Modal from "./Modal";

const Servers = ({selectedItem, data, selectItem}) => { 
  
  const [open, setOpen] = useState(false);
  const [dataServer, setDataServer] = useState([]);
  const [server, setServer] = useState(false);
  
  const servers = data.reduce((result, current) => {
    if (!result.find((item) => item.id===current.server.id )) {
      result.push(current.server);
    }
    return result;
  }, []);

  const filterServers = useCallback(() => {
    const filtered = data.filter(d => d.server.id === server.id);
    setDataServer(filtered);
  }, [data, server]);

  useEffect(() => { 
    filterServers();
  }, [filterServers]);

    return (
      <>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Ip4</th>
              <th scope="col">Dns</th>
            </tr>
          </thead>
        {servers.map((item) => {  
          return (
           <tr key={item.id}  onClick={()=> {setServer(item); setOpen(!open)}} className = {(selectedItem.server.id===item.id && !server.id) || server.id===item.id ? 'selected' : null}>
              <td data-title="Ip4" >{item.ip4}</td>
              <td data-title="Dns">{item.dns}</td>
            </tr>
          );
          })
        }
        </table>
        {open && <Modal dataServer={dataServer} selectItem={selectItem}/>} 
      </>
    )
};

export default Servers;