import React, { useState, useEffect } from 'react';

function DriversChamionship() {
    const [driverStandings, setDriverStandings] = useState([]);

    useEffect(() => {
        fetch('http://ergast.com/api/f1/current/driverStandings.json')
            .then((response) => response.json())
            .then((data) => {
                // Extract driver standings data
                const standings = data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
                // Sort drivers by points in descending order
                const sortedStandings = standings.sort((a, b) => b.points - a.points);
                setDriverStandings(sortedStandings);
            })
            .catch((error) => {
                console.error('Error fetching driver standings:', error);
            });
    }, []);

    return (
        <div className='driver-standings'>
            <h2>Current Driver Standings</h2>
            <table>
                <tbody>
                    {driverStandings.map((driver, index) => (
                        <tr key={index}>
                        <td>{driver.position}</td>
                        <td>{`${driver.Driver.givenName} ${driver.Driver.familyName} - ${driver.Driver.permanentNumber}`}</td>
                        <td>{driver.Constructors[0].name}</td>
                        <td>{driver.points}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default DriversChamionship;