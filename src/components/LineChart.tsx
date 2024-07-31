import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Label, ResponsiveContainer } from "recharts";
import { Planet } from "../types/Planet";
import "./components.css";

interface ChartProps {
    planets: Planet[]
}

const Chart = ({ planets }: ChartProps) => {

    const data = planets.filter(planet => planet.period !== -1)

    return(
        <ResponsiveContainer width={1000} height={400}>
        <LineChart width={1000} height={400} data={data} margin={{ bottom: 20}}>
            <Line type="monotone" dataKey="period" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="2 2" />
            <XAxis dataKey="name">
                <Label value="Planet Name" position="bottom"/>
            </XAxis>
            <YAxis label={{ value: "Days", angle: -90, position: "insideLeft" }}/>
            <Tooltip />
        </LineChart>
        </ResponsiveContainer>
    )
}

export default Chart;