import { FaLinkedinIn,FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { variants } from "./varient";

type view={
    isInView:true|false
}
export const Person=({isInView}:view)=>{
    return(
        <motion.div
            animate={
                isInView ? "moveFromTop":"returnToTop"
            }
            variants={variants}
            className="p-3 d-flex flex-column justify-cotent-center moveFromTop">
            <img 
                src="https://res.cloudinary.com/doouwbecx/image/upload/v1619619715/mf-avatar_qasnj3.svg"
                alt="object ntot found"
                className="w-100"
            />
            <div className="d-flex justify-content-center mt-3">
                <a
                    href="https://www.linkedin.com/in/hamzat-lawal-b81771202"
                    className="me-2"
                >
                    <FaLinkedinIn
                        size="1.5rem"
                        color="white"
                    />
                </a>
                <a
                    href="https://github.com/hamskid-id"
                    className="me-2"
                >
                    <FaGithub
                        size="1.5rem"
                        color="white"
                    />
                </a>
            </div>
        </motion.div>
    )
}