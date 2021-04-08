import React from 'react';

const SearchBar = ({value,  setValue}) => {
    
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  
  const handleChange = (e) =>{
   setValue(e.target.value);   
  };
  
  return(
    <form onSubmit={handleSubmit}>
      <button type="submit"><img alt=" " src="search.png" style={{ width: 15, height: 15 }}/></button>
        <input
        type='text'
        placeholder="Search"
        value={value}
        onChange={handleChange}
         />
    </form>   
  )
};

export default SearchBar;