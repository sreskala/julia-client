import axios from "axios";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Planet as PlanetType } from "../types/Planet";

const base_route = import.meta.env.VITE_API_ROUTE;

//@ts-ignore
export async function loader({ params }) {

    try {
        const res = await axios.get(`${base_route}/${params.id}`, {
            withCredentials: false
        });
    
        const planetData: PlanetType = res.data

        console.log('PLANET ==> ', planetData)
        console.log(typeof planetData)

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

function Planet() {
    //@ts-ignore
    const { planetData } = useLoaderData()
    
    if (!planetData) {
        return (
            <p>Uhoh!</p>
        )
    }
    return (
        <>
        <h1>I'm a planet baby</h1>
        <p>{planetData?.name}</p>
        </>
    )
}

export default Planet;