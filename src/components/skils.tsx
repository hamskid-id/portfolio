import { motion, useInView } from "framer-motion";
import { Divider } from "./divider"
import { Vertex } from "./verticaldivide"
import {useRef} from "react";
import { variants } from "./varient";

export const Skills=()=>{
    
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return(
        <>
            <h6 className="fs-1 nunito text-white mb-5 ">Skills</h6>
                <div
                    ref={ref} 
                    className="d-flex justify-content-between wt-75 m-auto p-4 r-12 bg-black">
                    <motion.div
                        animate={
                            isInView ? "moveFromLeft":"returnToLeft"
                        }
                        variants={variants}
                    >
                        <h6 className="fs-4 lightgrey fw-bold nunito mb-3">My favorite skills</h6>
                        <ul className="skills">
                            <li>HTMl</li>
                            <li>Css</li>
                            <li>Bootstrap</li>
                            <li>Firebase</li>
                            <li>Javascript</li>
                            <li>ReactJs</li>
                            <li>Redux</li>
                            <li>Redux toolkit</li>
                            <li>Nextjs</li>
                            <li>TypeScript</li>
                        </ul>
                    </motion.div>
                    <Vertex/>
                    <motion.div
                        animate={
                            isInView ? "moveFromRight":"returnToRight"
                        }
                        variants={variants}
                    >
                        <h6 className="fs-4 nunito lightgrey fw-bold mb-3">DevTools</h6>
                        <ul className="skills">
                            <li>Firebase</li>
                            <li>Github</li>
                        </ul>
                    </motion.div>
                </div>
                <Divider/>
        </>
    )
}