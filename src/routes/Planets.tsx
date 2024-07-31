import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {Planet} from "../types/Planet";
import SinglePlanet from "../components/SinglePlanet";
import "./planets.css"
import Pagination from "../components/Pagination";
import LineChart from "../components/LineChart";
import ScatterPlot from "../components/ScatterPlot";

function Planets() {
    const navigate = useNavigate();
    const [planets, setPlanets] = useState<Planet[]>([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [planetsPerPage, setPlanetsPerPage] = useState(10);
    
    const [plot, setPlot] = useState(0);

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

    const handleDecreasePlot = (e: React.MouseEvent) => {
        e.preventDefault();
        if (plot === 0) {
            return
        }

        setPlot(plot - 1)
    }

    const handleIncreasePlot = (e: React.MouseEvent) => {
        e.preventDefault();
        if (plot === 3) {
            return
        }

        setPlot(plot + 1)
    }

    const plotMap = [
        {
            title: "Period (Length of Revolution)",
            element: <LineChart planets={currentPlanets}/>
        },
        {
            title: "Scatter Plot",
            element: <h1>Scatter</h1>
        },
        {
            title: "Bar Chart",
            element: <h1>Bar</h1>
        },
        {
            title: "Pie Chart",
            element: <h1>Pir</h1>
        }
    ]

    const getPlot = (plot: number) => {
        return plotMap[plot].element
    }

    const getPlotTitle = (plot: number) => {
        return plotMap[plot].title
    }

    return (
        <>
        <Pagination planetsPerPage={planetsPerPage} totalPlanets={planets.length} handlePageClick={(num) => setCurrentPage(num)} currentPage={currentPage}/>
        <div>
            <button disabled={plot === 0} onClick={(e) => handleDecreasePlot(e) }>{"<"}</button>
            <h2>{getPlotTitle(plot)}</h2>
            <button disabled={plot === 3} onClick={(e) => handleIncreasePlot(e)}>{">"}</button>
        </div>
        <div className="plot-container">
            {getPlot(plot)}
        {/* <LineChart planets={currentPlanets}/> */}
        </div>
            <ScatterPlot planets={currentPlanets}/>
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