import { Scatter, Legend , CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, ScatterChart, ZAxis } from "recharts";
import { Planet } from "../types/Planet";
import "./components.css";

interface ScatterPlotProps {
    planets: Planet[]
}

const ScatterPlot = ({ planets }: ScatterPlotProps) => {
    const data = planets.filter(planet => planet.yearDiscovered !== -1 && planet.distance !== -1)

    console.log(data)
    return (
        <ResponsiveContainer width={1000} height={400}>
            <ScatterChart width={1000} height={400} data={data} margin={{ bottom: 20}}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="distance" type="number" name="distance" unit="ly" />
                <YAxis dataKey="yearDiscovered" type="number" name="year" />
                <ZAxis dataKey="name" name="planet name" />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Legend />
                <Scatter name="Planet" data={data} fill="#8884d8" />
            </ScatterChart>
        </ResponsiveContainer>
    )
}

export default ScatterPlot;