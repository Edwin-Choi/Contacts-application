
import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
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
      <div className="App">
        <header className="App-header">
          <p>
            <code></code>
            {items.map(item => (
            <li key={item.id}>
              {item.name} {item.username} {item.email} 
            </li>
            ))}
          </p>
        </header>
      </div>
    );
  }
}

export default App;
