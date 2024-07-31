import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {Planet} from "../types/Planet";
import SinglePlanet from "../components/SinglePlanet";
import "./planets.css"
import Pagination from "../components/Pagination";
import LineChart from "../components/LineChart";

function Planets() {
    const navigate = useNavigate();
    const [planets, setPlanets] = useState<Planet[]>([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [planetsPerPage, setPlanetsPerPage] = useState(10);

    const base_route = import.meta.env.VITE_API_ROUTE;
    const all_planets_route = `${base_route}/all_planets`

    useEffect(() => {
        const fetchPlanets = async () => {
            setLoading(true)
            try {
                const res = await axios.get(all_planets_route, {
                    withCredentials: false
                })

                setPlanets(res.data)
                setLoading(false);
            } catch (error) {
                console.error(error)
                navigate('/error')
            }
        }

        fetchPlanets();
    }, [])

    if (loading) {
        return (
            <p>Loading</p>
        )
    }

    const indexOfLastPlanet = currentPage * planetsPerPage;
    const indexOfFirstPlanet = indexOfLastPlanet - planetsPerPage;
    const currentPlanets = planets.slice(indexOfFirstPlanet, indexOfLastPlanet); 

    return (
        <>
        <Pagination planetsPerPage={planetsPerPage} totalPlanets={planets.length} handlePageClick={(num) => setCurrentPage(num)} currentPage={currentPage}/>
        <div>
            <h2>Period</h2>
        </div>
        <div className="plot-container">
        <LineChart planets={currentPlanets}/>
        </div>
            <div className="outside-container">
            {
                currentPlanets.map((planet, indx) => (
                    <div key={indx} className="planet-container">
                        <SinglePlanet planet={planet} index={indx}/>
                    </div>
                ))
            }
            </div>
        </>
    )
}

export default Planets;