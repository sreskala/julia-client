import { Planet } from "../types/Planet";
import './components.css'

import planetPhoto from '../assets/earth-7503926_1920.jpg';
import { useNavigate } from "react-router-dom";

interface SinglePlanetProps {
    planet: Planet;
    index: number;
}

export const Stats = ({ starName, distance, mass, period, yearDiscovered }: Partial<Planet>) => {
    return (
        <div className="stats-container">
            <h3 className="stats-header">Stats</h3>
            <p className="planet-stat"><b>Star Name:</b> {starName}</p>
            <p className="planet-stat"><b>Distance(LY):</b> {distance}</p>
            <p className="planet-stat"><b>Mass(Mj):</b> {mass}</p>
            <p className="planet-stat"><b>Period:</b> {period}</p>
            <p className="planet-stat"><b>Year Discovered:</b> {yearDiscovered}</p>
        </div>
    )
}

const SinglePlanet = ({planet, index}: SinglePlanetProps) => {
    const navigate = useNavigate();
    const planetId = index + 1;
    return (
        <div className="card-container">
            <img src={planetPhoto} className="card-image"/>
            <h1 className="planet-title">{planet.name}</h1>
            <h2 className="planet-subtitle">{planet.eponym}</h2>
            <hr />
            <Stats starName={planet.starName} distance={planet.distance} mass={planet.mass} period={planet.period} yearDiscovered={planet.yearDiscovered}/>
            <button className="planet-btn" onClick={() => navigate(`/planets/${planetId}`)}>Go to Planet</button>
        </div>
    )
}

// function SinglePlanet({planet: Planet}) {
//     return (
//         <>
//             <h1>{planet.name}</h1>
//             <h2>{planet.eponym}</h2>
//             <h3>{planet.starName}</h3>
//             <h4>{planet.distance}</h4>
//             <p>{planet.mass}</p>
//             <p>{planet.period}</p>
//             <p>{planet.yearDiscovered}</p>
//         </>
//     )
// }

export default SinglePlanet;