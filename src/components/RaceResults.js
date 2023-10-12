import React, { useState } from 'react';

function RaceResults() {
  const [raceResults, setRaceResults] = useState(null);

  const handleFetchRaceResults = () => {
    fetch('http://ergast.com/api/f1/current/last/results.json')
      .then((response) => response.json())
      .then((data) => {
        const results = data.MRData.RaceTable.Races[0].Results;

        setRaceResults(results);
      })
      .catch((error) => {
        console.error('Error fetching race results:', error);
      });
  };

  return (
    <div>
      <button className='race-results' onClick={handleFetchRaceResults}>Race Results</button>
      {raceResults && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={() => setRaceResults(null)}>
              &times;
            </span>
            <h2>Latest Race Results</h2>
            <table>
              <tbody>
                {raceResults.map((result, index) => (
                  <tr key={index}>
                    <td>{result.position}</td>
                    <td>{`${result.Driver.givenName} ${result.Driver.familyName}`}</td>
                    <td>{result.Constructor.name}</td>
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

export default RaceResults;