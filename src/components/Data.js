import React, { useEffect, useState } from "react";
import { useDebounce } from "./helpers";
import DataMenu from "./DataMenu";
import Detail from "./Detail";
import SearchBar from "./SearchBar";
import Surfaces from "./Surfaces";
import Servers from "./Servers";

const Data = ({data, item}) => {
  const [tab, setTab] = useState('Surfaces');
  const [detail,setDetail]=useState({});  
  const [value, setValue] = useState('');
  const [matches,setMatches]= useState([]);

  const selectTab = (tabView) => {
      setTab(tabView)
    }
  const debouncedSearchQuery = useDebounce(value, 500);

    useEffect(() => {
      const matches = data.filter((item) => item.venueName.toLowerCase().includes(debouncedSearchQuery));
      setMatches(matches)
    }, [debouncedSearchQuery,data]);

    const selectItem =(item)=>{
      setDetail(item)
    };
    
    const showSurfaces = tab === "Surfaces";   
    const showDetail = detail.id ? detail : item;

    return (
      
       <div>
        <SearchBar value = {value} setValue = {setValue}/>
        <DataMenu selectTab = {selectTab}/>
          <div className="content">
            {showSurfaces 
            ? <Surfaces data={matches} selectItem={selectItem} selectedItem={showDetail}/> 
            : <Servers data={matches} selectItem={selectItem} selectedItem={showDetail}/>}
            <Detail detail={showDetail} />  
          </div>
      </div> 
    )}

export default Data;