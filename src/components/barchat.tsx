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
            number:90
        },{
            name:"Css",
            number:90
        },{
            name:"Javascript",
            number:90
        },{
            name:"Bootstrap",
            number:90
        },{
            name:"Reactjs",
            number:90
        },{
            name:"Redux",
            number:90
        },{
            name:"Typescript",
            number:90
        },{
            name:"Nextjs",
            number:90
        }
    ]
    const [
        usedata
    ] = useState({
        labels:Radardata?.map(
            (data)=>data.name
        ),
        datasets:[{
            label:"key email marketing metrics",
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