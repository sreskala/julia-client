import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {Planet} from "../types/Planet";
import SinglePlanet from "../components/SinglePlanet";
import "./planets.css"

function Planets() {
    const navigate = useNavigate();
    const [planets, setPlanets] = useState<Planet[]>([]);
    const [loading, setLoading] = useState(true);

    const base_route = import.meta.env.VITE_API_ROUTE;

    useEffect(() => {
        const fetchPlanets = async () => {
            setLoading(true)
            try {
                const res = await axios.get(base_route, {
                    withCredentials: false
                })

                setPlanets(res.data)
            } catch (error) {
                console.error(error)
                navigate('/error')
            }
        }

        fetchPlanets();
        setLoading(false);
    }, [])

    if (loading) {
        return (
            <p>Loading</p>
        )
    }

    return (
        <>
            <div className="outside-container">
            {
                planets.map((planet, indx) => (
                    <div key={indx} className="container">
                        <SinglePlanet planet={planet} index={indx}/>
                    </div>
                ))
            }
            </div>
        </>
    )
}

export default Planets;