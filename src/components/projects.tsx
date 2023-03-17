import SimpleSlider from "./slide"
import {useRef} from "react";
import { variants } from "./varient";
import { motion, useInView } from "framer-motion";

export const Projects=()=>{
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return(
        <div 
            ref={ref}>
            <h6 className="fs-1 nunito text-white mb-3">Projects</h6>
            <motion.h6
                animate={
                    isInView ? "staggered":"staggeredback"
                }
                variants={variants} 
                className="fs-6 grey mb-5 staggered">Here are few projects I've worked on recently. Want to see more? Email me
            </motion.h6>
            <div
                className="d-flex justify-content-between w-100 m-auto bg-black p-2 r-12">
                <SimpleSlider
                    isInView={isInView}
                />
            </div>
        </div>
    )
}