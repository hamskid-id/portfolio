import { motion, useInView } from "framer-motion";
import { Divider } from "./divider"
import { FaHotjar,FaGithub } from "react-icons/fa";
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
                        <h6 
                            className="fs-3 bbb fw-bold nunito mb-3"
                            style={{
                                fontFamily: `'Karla', sans-serif`,
                            }}
                        >My favorite skills</h6>
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
                        <h6
                            className="fs-3 bbb fw-bold nunito mb-3"
                            style={{
                                fontFamily: `'Karla', sans-serif`,
                            }}>DevTools</h6>
                        <div className="d-flex justify-content-center mt-3">
                            <span
                            >
                                <FaHotjar
                                    size="2.5rem"
                                    color="gold"
                                    className="me-2"
                                />
                            </span>
                            <span
                            >
                                <FaGithub
                                    size="2.5rem"
                                    color="white"
                                />
                            </span>
                        </div>
                    </motion.div>
                </div>
                <Divider/>
        </>
    )
}