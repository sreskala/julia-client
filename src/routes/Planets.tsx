import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Planet from "../types/Planet";

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

                console.log(res);

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
            {
                planets.map(planet => (
                    <p>{planet.id}</p>
                ))
            }
        </>
    )
}

export default Planets;