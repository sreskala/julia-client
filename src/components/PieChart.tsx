import { PieChart as RechartsPieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";
import { Planet } from "../types/Planet";
import "./components.css";

interface ChartProps {
    planets: Planet[]
}

const PieChart = ({ planets }: ChartProps) => {

    const data = planets.filter(planet => planet.mass !== -1)

    return(
        <ResponsiveContainer width={1000} height={400}>
        <RechartsPieChart width={500} height={500} data={data} margin={{ bottom: 20}}>
            <Pie data={data} dataKey="mass" nameKey="Mass" cx="50%" cy="50%" fill="#8884d8" />
            <Tooltip payload={[ {name: "name", dataKey: "name"} ]}/>
        </RechartsPieChart>
        </ResponsiveContainer>
    )
}

export default PieChart;