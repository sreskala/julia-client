import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Label } from "recharts";
import { Planet } from "../types/Planet";
import "./components.css";

interface ChartProps {
    planets: Planet[]
}

const XLabel = () => {
    return (
        <div className="line-chart-x-label">
            Planet Name
        </div>
    )
}

const Chart = ({ planets }: ChartProps) => {

    const data = planets.filter(planet => planet.mass !== -1)

    return(
        <LineChart width={1000} height={400} data={data} >
            <Line type="monotone" dataKey="period" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="2 2" />
            <XAxis dataKey="name">
                <Label value="Planet Name" position="insideBottom" offset={-10}/>
            </XAxis>
            <YAxis />
            <Tooltip />
        </LineChart>
    )
}

export default Chart;