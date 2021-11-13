
import React, { useState, useEffect } from 'react';
import './Contacts.css';

function Contacts() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() =>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(
      (result) => {
        setIsLoaded(true);
        setItems(result);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    )
  },[])
  if(error){
    return <div>Error: {error.message}</div>;
  }else if (!isLoaded){
    return <div>Loading...</div>;
  }else {
    return (
      <div className='Contact'>
        {items.map(item => (
          <li key={item.id}>
            {item.id}. {item.name} {item.username} <br/>
            {item.email} <br/>
            {item.address.suite} {item.address.street} {item.address.city} {item.address.postcode}<br/>
            {item.address.geo.lat}  x  {item.address.geo.lng}<br/>
            {item.phone}<br/>
            {item.website}<br/>
            {item.company.name}<br/>
            {item.company.catchPhrase}<br/>
            {item.company.bs}<br/>
          </li>
        ))}
      </div>
    );
  }
}

export default Contacts;
