import {FaAlignRight } from "react-icons/fa";
import {FaTimes } from "react-icons/fa";
import {useRef,useState} from "react"
import { motion} from "framer-motion";
import { variants } from "./varient";
import { Mobilenav } from "./mobileNav";

interface refProps {
    Navref:React.RefObject<HTMLDivElement>,
    projectref:React.RefObject<HTMLDivElement>,
    skillref:React.RefObject<HTMLDivElement>,
    contactref:React.RefObject<HTMLDivElement>,
}

export const ToggleIcon=({
    Navref,
    projectref,
    skillref,
    contactref
}:refProps)=>{

    const [showNavToggler,setShowNavToggler] = useState<true|false|null>(null);
    const navRef = useRef<HTMLDivElement>(null);

    const showNav =()=>{
        setShowNavToggler(false)
        setTimeout(()=>{
            navRef.current?.classList.add("active");
            setShowNavToggler(true)
        },100)
    }

     const hideNav =()=>{
        setShowNavToggler(false)
        setTimeout(()=>{
            navRef.current?.classList.remove("active");
            setShowNavToggler(false)
        },400)
    }

    return(
        <>
            <motion.div
                animate={
                    showNavToggler ? "navOpen": 
                    showNavToggler===false ? 
                    "navClose":"default"
                }
                variants={variants} 
                className="br-12 p-1 transparent-brown togg">
                <Mobilenav
                    showNavToggler={showNavToggler}
                    Navref={Navref}
                    hideNav={hideNav}
                    projectref={projectref}
                    contactref={contactref}
                    skillref={skillref}
                    navRef={navRef}
                />
                <div className="br-12 p-3 fs-6 cover d-flex justify-content-between">
                    <span className="text-white">
                        i.<span className="lightgrey"> lawalH</span><span className="bbb">.web</span>
                    </span>
                    <span className="text-white fs-6 ms-2">
                        {
                            showNavToggler===null||showNavToggler===false?(
                                <FaAlignRight
                                color="white"
                                size="0.7rem"
                                onClick={showNav}
                            />
                            ):(
                                <FaTimes
                                    color="white"
                                    size="0.7rem"
                                    onClick={hideNav}
                                />
                            )
                        }
                    </span>
                </div>
            </motion.div>
        </>
    )
}