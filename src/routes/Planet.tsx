import axios from "axios";
import { useLoaderData, Link } from "react-router-dom";
import { Planet as PlanetType } from "../types/Planet";
//import { LavaPlanet } from "../models/Planet";
import { Stats } from "../components/SinglePlanet";

import "./planets.css";

const base_route = import.meta.env.VITE_API_ROUTE;

//@ts-ignore
export async function loader({ params }) {

    try {
        const res = await axios.get(`${base_route}/planets/${params.id}`, {
            withCredentials: false
        });
    
        const planetData: PlanetType = res.data

        if (typeof planetData === "string") {
            if (planetData === "Nothing") {
                return {}
            }
        }
    
        return { planetData }   
    } catch (error) {
        return {}
    }
}

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

function Planet() {
    //@ts-ignore
    const { planetData } = useLoaderData()
    
    if (!planetData) {
        return (
            <div>
                <h1>Uh-Oh!</h1>
                <p>This planet doesn't exist in our system!</p>
                <Link to="/">CLick here to go back to home base</Link>
            </div>
        )
    }
    return (
        <>
        {/* <div className="single-planet-container">
            <LavaPlanet />
        </div> */}
        <div className="single-planet-data-container">
            <h1 className="planet-title">{planetData?.name}</h1>
            <h2 className="planet-subtitle">{planetData?.eponym}</h2>
            <hr />
            <Stats starName={planetData?.starName} distance={planetData?.distance} mass={planetData?.mass} period={planetData?.period} yearDiscovered={planetData?.yearDiscovered}/>
            <Link className="planet-btn" to="/planets">Go back</Link>
        </div>
        </>
    )
}

export default Planet;