import React, { useState, useEffect } from 'react';

function FavoriteDriver() {
    const [drivers, setDrivers] = useState([]);
    const [selectedDriver, setSelectedDriver] = useState('');
  
    useEffect(() => {
        // Make an API request to fetch a list of drivers
        fetch('https://ergast.com/api/f1/2023/drivers.json')
            .then((response) => response.json())
            .then((data) => {
                setDrivers(data.MRData.DriverTable.Drivers);
            })
            .catch((error) => {
                console.error('Error fetching driver data:', error);
            });
    }, []);
  
    return (
        <div>
            <select
                className="driver-button"
                onChange={(e) => setSelectedDriver(e.target.value)}
                value={selectedDriver}
            >
            <option value="">★</option>
                {drivers.map((driver, index) => (
                    <option key={index} value={driver.driverId}>
                        {driver.givenName} {driver.familyName} {driver.permanentNumber}
                    </option>
                ))}
            </select>
        </div>
    );
  
}

export default FavoriteDriver;