import {Radar} from "react-chartjs-2"
import 'chart.js/auto';
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
  } from 'chart.js';
import {useState} from "react"
ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
  );
export const BarChart =()=>{
    const Radardata=[
        {
            name:"Html",
            number:94
        },{
            name:"Css",
            number:94
        },{
            name:"Javascript",
            number:95
        },{
            name:"Bootstrap",
            number:94
        },{
            name:"Reactjs",
            number:95
        },{
            name:"Firebase",
            number:80
        },{
            name:"Redux",
            number:95
        },{
            name:"Typescript",
            number:80
        },{
            name:"Nextjs",
            number:80
        }
    ]
    const [
        usedata
    ] = useState({
        labels:Radardata?.map(
            (data)=>data.name
        ),
        datasets:[{
            label:"key skills metrics",
            data:Radardata?.map(
                (data)=>data.number
            ),
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
        }]
    });
    return(
        <Radar data={usedata}/>
    )
}