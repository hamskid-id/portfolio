import {FaAlignRight } from "react-icons/fa";
import { FaAccusoft,FaTimes } from "react-icons/fa";
import {useRef,useState} from "react"
import { motion} from "framer-motion";
import { variants } from "./varient";

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
            setShowNavToggler(null)
        },400)
    }

    return(
        <div>
            <div className="br-12 p-1 transparent-brown togg">
                <motion.div
                    animate={
                        showNavToggler ? "open": 
                        showNavToggler===false ? 
                        "closed":"default"
                    }
                    ref={navRef}
                    variants={variants}
                    className=" wt-60 mobilenav"
                >
                    <div className="navLink">
                        <h6 className="navLinkLinks" onClick={()=>{
                            if(Navref.current){
                                hideNav()
                                Navref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
                            }
                        }}>Home</h6>
                        <h6 className="navLinkLinks" onClick={()=>{
                            if(skillref.current){
                                hideNav()
                                skillref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
                            }
                        }}>Skills</h6>
                        <h6 className="navLinkLinks" onClick={()=>{
                            if(projectref.current){
                                hideNav()
                                projectref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
                            }
                        }}>Projects</h6>
                        <h6 className="navLinkLinks" onClick={()=>{
                            if(contactref.current){
                                hideNav()
                                contactref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
                            }
                        }}>Contact</h6>
                        <a href='/LawalHamzatResume.pdf' download className="cv" onClick={()=>hideNav()}>Download Cv</a>
                    </div>
                </motion.div>
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
            </div>
        </div>
    )
}