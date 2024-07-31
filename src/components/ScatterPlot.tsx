import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Label, ResponsiveContainer } from "recharts";
import { Planet } from "../types/Planet";
import "./components.css";

interface ScatterPlotProps {
    planets: Planet[]
}

const ScatterPlot = ({ planets }: ScatterPlotProps) => {
    const data = planets.filter(planet => planet.yearDiscovered !== -1 && planet.distance !== -1)

    console.log(data)
    return (
        <div>
            Im a plot
        </div>
    )
}

export default ScatterPlot;