import "./App.css";
import ConstructorsChampionship from "./components/ConstructorsChampionship";
import DriversChampionship from "./components/DriversChampionship";
import FavoriteDriver from "./components/FavoriteDriver";
import QualifyingResults from "./components/QualifyingResults";
import RaceResults from "./components/RaceResults";
import UpcomingRaces from "./components/UpcomingRaces";

function App() {
  return (
    <div>
      <div className="row">
        <div className="column">
          <FavoriteDriver />
          <UpcomingRaces />
        </div>
        <div className="column">
          <ConstructorsChampionship />
        </div>
      </div>
      <div className="row">
        <div className="column">
          <DriversChampionship />
        </div>
        <div className="column">
          <QualifyingResults />
          <RaceResults />
        </div>
      </div>
    </div>
  )
}

export default App;
