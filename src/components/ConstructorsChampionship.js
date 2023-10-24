import React, { useState, useEffect } from 'react';

function ConstructorsChamionship() {
    const [constructorStandings, setConstructorStandings] = useState([]);

    useEffect(() => {
        fetch('https://ergast.com/api/f1/current/constructorStandings.json')
            .then((response) => response.json())
            .then((data) => {
                // Extract constructor standings data
                const standings = data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
                // Sort constructors by points in descending order
                const sortedStandings = standings.sort((a, b) => b.points - a.points);
                setConstructorStandings(sortedStandings);
            })
            .catch((error) => {
                console.error('Error fetching constructor standings:', error);
            });
    }, []);
  
    return (
        <div id='constructors-championship-color' className='constructor-standings'>
            <h2>CONSTRUCTOR STANDINGS</h2>
            <table>
                <tbody>
                    {constructorStandings.map((constructor, index) => (
                        <tr key={index}>
                        <td>{constructor.position}</td>
                        <td>{constructor.Constructor.name}</td>
                        <td>{constructor.points}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ConstructorsChamionship;