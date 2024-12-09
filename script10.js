import React, { useState, useEffect } from 'react';

function TempleCard() {
  const [templeData, setTempleData] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/temples/1')
      .then(response => response.json())
      .then(data => setTempleData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="temple-card">
      {templeData ? (
        <>
          <h2>{templeData.name}</h2>
          <p>Location: {templeData.location}</p>
          {/* ... and so on */}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}