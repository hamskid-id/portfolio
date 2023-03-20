import { motion, useInView } from "framer-motion";
import { Divider } from "./divider"
import { Vertex } from "./verticaldivide"
import {useRef} from "react";
import { variants } from "./varient";
import { BarChart } from "./barchat";

export const Skills=()=>{
    
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return(
        <>
            <h6 className="fs-1 nunito text-white mb-4 ">Skills</h6>
                <div
                    ref={ref} 
                    className="d-flex justify-content-center m-auto p-4 r-12 bg-black wrap">
                    <motion.div
                        animate={
                            isInView ? "moveFromLeft":"returnToLeft"
                        }
                        variants={variants}
                        className="wt-50"
                    >
                        <h6 className="fs-3 lightgrey fw-bold nunito mb-3">My favorite skills</h6>
                        <div className="w-100">
                            <BarChart/>
                        </div>
                        
                    </motion.div>
                    <motion.div
                        animate={
                            isInView ? "moveFromRight":"returnToRight"
                        }
                        variants={variants}
                    >
                        <h6 className="fs-3 nunito lightgrey fw-bold mb-3">DevTools</h6>
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