import { Person } from "./person";
import { TypeAnimation } from 'react-type-animation';
import {useInView,motion } from "framer-motion";
import { variants } from "./varient";
import {useRef} from "react";

export const Intro=()=>{
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return(
        <div 
            ref={ref}
            className="d-flex flex-column justify-content-center intro">
             <TypeAnimation
                sequence={[

                    'Hi, Im Lawal Hamzat',
                    2000,
                    'A Tech Enthusiast',
                    2000,
                    'A music Lover',
                    2000, 
                ]}
                wrapper="h6"
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: '1.5em',color:"white" }}
                />
            <motion.h6
                animate={
                    isInView ? "staggered":"staggeredback"
                }
                variants={variants}  
                className="display-4 nunito lightgrey fw-bolder">
                Frontend Developer
            </motion.h6>
            <div className="person-1">
                <Person
                    isInView={isInView}
                />
            </div>
        </div>
    )
}