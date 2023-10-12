import React, { useState, useEffect } from 'react';

function UpcomingRaces() {
    const [nextRaces, setNextRaces] = useState([]);

    useEffect(() => {
        const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format

        fetch('http://ergast.com/api/f1/current.json')
            .then((response) => response.json())
            .then((data) => {
                // Extract the list of races
                const races = data.MRData.RaceTable.Races;
                // Filter and store the next 3 races from the current date
                const nextThreeRaces = races.filter((race) => race.date >= today).slice(0, 3);
                setNextRaces(nextThreeRaces);
            })
        .catch((error) => {
            console.error('Error fetching race data:', error);
        });
    }, []);

    return (
        <div className='upcomming-races'>
            <h2>Next 3 Races</h2>
            <div>
                {nextRaces.map((race, index) => (
                    <p key={index}>
                        {race.raceName}: {race.date}
                    </p>
                ))}
            </div>
        </div>
    );
}

export default UpcomingRaces;