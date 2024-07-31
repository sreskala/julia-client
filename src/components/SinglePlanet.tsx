import { Planet } from "../types/Planet";

// export type Planet = {
//     id: number;
//     name: string;
//     eponym: string;
//     starName: string;
//     distance: number;
//     mass: number;
//     period: number;
//     yearDiscovered:number;
// }

const SinglePlanet = ({planet, index}: {planet: Planet, index: number}) => {
    return (
        <>
            <h1>{planet.name}</h1>
            <h2>{planet.eponym}</h2>
            <h3>{planet.starName}</h3>
            <h4>{planet.distance}</h4>
            <p>{planet.mass}</p>
            <p>{planet.period}</p>
            <p>{planet.yearDiscovered}</p>
        </>
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