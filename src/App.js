import React, { useState } from 'react';
import "./App.css";
import ConstructorsChampionship from "./components/ConstructorsChampionship";
import DriversChampionship from "./components/DriversChampionship";
import FavoriteDriver from "./components/FavoriteDriver";
import QualifyingResults from "./components/QualifyingResults";
import RaceResults from "./components/RaceResults";
import UpcomingRaces from "./components/UpcomingRaces";
import ColorChange from './components/ColorChange';

function App() {
  const [selectedDriver, setSelectedDriver] = useState('');

  return (
    <div>
      <ColorChange selectedDriver={selectedDriver} />
      <div className="row">
        <div className="column">
          <FavoriteDriver selectedDriver={selectedDriver} setSelectedDriver={setSelectedDriver} />
          <UpcomingRaces selectedDriver={selectedDriver} />
        </div>
        <div className="column">
          <ConstructorsChampionship selectedDriver={selectedDriver} />
        </div>
      </div>
      <div className="row">
        <div className="column">
          <DriversChampionship selectedDriver={selectedDriver} />
        </div>
        <div className="column">
          <QualifyingResults selectedDriver={selectedDriver} />
          <RaceResults selectedDriver={selectedDriver} />
        </div>
      </div>
    </div>
  )
}

export default App;
