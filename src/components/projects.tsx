import SimpleSlider from "./slide"
import {useRef} from "react";
import { variants } from "./varient";
import { motion, useInView } from "framer-motion";

export const Projects=()=>{
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return(
        <div 
            ref={ref}
            className="bg-black p-2 r-12 pt-4"
            >
            <h6 className="fs-1 nunito text-white mb-3 mt-2">Projects</h6>
            <motion.h6
                animate={
                    isInView ? "staggered":"staggeredback"
                }
                variants={variants}
                className="fs-6  mb-5 staggered bbb"
                style={{
                    fontFamily: `'Karla', sans-serif`,
                }}
                >Here are few projects I've worked on recently. Want to see more? Email me
            </motion.h6>
            <div
                className="d-flex justify-content-center w-100 m-auto">
                <SimpleSlider
                    isInView={isInView}
                />
                
            </div>
        </div>
    )
}