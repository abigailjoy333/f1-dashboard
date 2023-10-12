import React, { useState } from 'react';

function QualifyingResults() {
    const [qualifyingData, setQualifyingData] = useState(null);
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const handleFetchQualifyingResults = () => {
        fetch('https://ergast.com/api/f1/current/qualifying.json')
            .then((response) => response.json())
            .then((data) => {
                const races = data.MRData.RaceTable.Races;
                const mostRecentRace = races[races.length - 1];
                setQualifyingData(mostRecentRace.QualifyingResults);
                setIsPopupVisible(true); // Show the pop-up
            })
            .catch((error) => {
                console.error('Error fetching qualifying results:', error);
            });
    };

    return (
        <div>
            <button className='qualifying-results' onClick={handleFetchQualifyingResults}>Qualifying Results</button>
            {isPopupVisible && qualifyingData && (
                <div className="popup">
                    <div className="popup-content">
                        <span className="close" onClick={() => setIsPopupVisible(false)}>
                            &times;
                        </span>
                        <h2>Most Recent Qualifying Results</h2>
                        <table>
                            <tbody>
                            {qualifyingData.map((result, index) => (
                                <tr key={index}>
                                <td>{result.Driver.givenName} {result.Driver.familyName}</td>
                                <td>{result.Q1}</td>
                                <td>{result.Q2}</td>
                                <td>{result.Q3}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
}

export default QualifyingResults;