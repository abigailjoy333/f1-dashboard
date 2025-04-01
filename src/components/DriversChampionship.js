import React, { useState, useEffect } from 'react';

function DriversChampionship() {
    const [driverStandings, setDriverStandings] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const pointsSystem = {
        1: 25, 2: 18, 3: 15, 4: 12, 5: 10, 
        6: 8, 7: 6, 8: 4, 9: 2, 10: 1
    };

    const sprintPointsSystem = {
        1: 8, 2: 7, 3: 6, 4: 5, 5: 4, 
        6: 3, 7: 2, 8: 1
    };

    useEffect(() => {
        // get all races from the current season
        fetch('https://api.openf1.org/v1/sessions?current_season=true&session_type=Race')
            .then(response => {
                if (!response.ok) throw new Error('Failed to fetch race sessions');
                return response.json();
            })
            .then(raceSessions => {
                // get sprints too
                fetch('https://api.openf1.org/v1/sessions?current_season=true&session_type=Sprint')
                    .then(response => {
                        if (!response.ok) throw new Error ('Failed to fetch sprint sessions');
                        return response.json();
                    })
                    .then(sprintSessions => {
                        const allSessions = [...raceSessions, ...sprintSessions];
                        // track fetch promises
                        const fetchPromises = [];
                        // driver points accumulator
                        const driverPoints = {};
                        // keep track of driver details
                        const driverDetails = {};
                        // fn to process race results and add points
                        const processResults = (results, isSprintRace = false) => {
                            results.forEach(result => {
                                const driverId = result.driver_id;
                                const position = parseInt(result.position);
                                // skip if NaN (DNF, DSQ, etc.)
                                if (isNaN(position)) return;
                                // initialize driver in points tracker if not already exists
                                if (!driverPoints[driverId]) {
                                    driverPoints[driverId] = 0;
                                    driverDetails[driverId] = {
                                        name: result.driver_name,
                                        team: result.team_name
                                    };
                                }
                                // add points based on position
                                const pointsTable = isSprintRace ? sprintPointsSystem : pointsSystem;
                                if (pointsTable[position]) {
                                    driverPoints[driverId] += pointsTable[position];
                                }
                            });
                        };
                        // fetch results for each session
                        allSessions.forEach(session => {
                            const isSprint = session.session_type === 'Sprint';
                            const fetchPromise = fetch (`https://api.openf1.org/v1/results?session_key=${session.session_key}`)
                                .then(response => {
                                    if (!response.ok) throw new Error(`Failed to fetch results for session ${session.session_name}`);
                                    return response.json();
                                })
                                .then(results => {
                                    processResults(results, isSprint);
                                });
                            fetchPromises.push(fetchPromise);
                        });
                        // when all fetch reqs are complete
                        Promise.all(fetchPromises)
                            .then(() => {
                                // convert accumulated points to standings array
                                const standings = Object.keys(driverPoints).map(driverId => ({
                                    driver_id: driverId,
                                    driver_name: driverDetails[driverId].name,
                                    team_name: driverDetails[driverId].team,
                                    points: driverPoints[driverId]
                                }));
                                // sort by points (descending)
                                const sortedStandings = standings.sort((a, b) => b.points - a.points);
                                // add position numbers
                                sortedStandings.forEach((driver, index) => {
                                    driver.position = index + 1;
                                });
                                setDriverStandings(sortedStandings);
                                setIsLoading(false);
                            })
                            .catch(error => {
                                console.error('Error fetching race results:', error);
                                setError(error.message);
                                setIsLoading(false);
                            });
                    })
                    .catch(error => {
                        console.error('Error fetching spring sessions:', error);
                        setError(error.message);
                        setIsLoading(false);
                    });
            })
            .catch(error => {
                console.error('Error fetching race sessions:', error);
                setError(error.message);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) return (
        <div className="driver-standings">
            <h2>DRIVER STANDINGS</h2>
            <p>Loading...</p>
        </div>
    );

    if (error) return (
        <div className="driver-standings">
            <h2>DRIVER STANDINGS</h2>
            <p>Error: {error}</p>
        </div>
    );

    return (
        <div id='drivers-championship-color' className='driver-standings'>
            <h2>DRIVER STANDINGS</h2>
            {driverStandings.length === 0 ? (
                <p>No standings data available</p>
            ) : (
                <table>
                    <tbody>
                        {driverStandings.map((driver, index) => (
                            <tr key={index}>
                                <td>{driver.position}</td>
                                <td>{driver.driver_name}</td>
                                <td>{driver.team_name}</td>
                                <td>{driver.points}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default DriversChampionship;