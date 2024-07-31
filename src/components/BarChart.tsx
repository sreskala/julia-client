import { BarChart as RechartsBarChart, CartesianGrid, XAxis, YAxis, Tooltip, Label, ResponsiveContainer, Bar } from "recharts";
import { Planet } from "../types/Planet";
import "./components.css";

interface BarChartProps {
    planets: Planet[]
}

const BarChart = ({ planets }: BarChartProps) => {

    const data = planets.filter(planet => planet.mass !== -1)

    return(
        <ResponsiveContainer width={1000} height={400}>
        <RechartsBarChart width={1000} height={400} data={data} margin={{ bottom: 20}}>
            <CartesianGrid stroke="#ccc" strokeDasharray="2 2" />
            <XAxis dataKey="name">
                <Label value="Planet Name" position="bottom"/>
            </XAxis>
            <YAxis label={{ value: "Mass (Mj)", angle: -90, position: "insideLeft" }}/>
            <Tooltip />
            <Bar dataKey="mass" fill="#8884d8"/>
        </RechartsBarChart>
        </ResponsiveContainer>
    )
}

export default BarChart;