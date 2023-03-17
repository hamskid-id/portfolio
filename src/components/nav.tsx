import {FaAlignRight } from "react-icons/fa";
import { FaAccusoft,FaTimes } from "react-icons/fa";
import {useRef,useState} from "react"
import { motion} from "framer-motion";
import { variants } from "./varient";

interface refProps {
    projectref:React.RefObject<HTMLDivElement>,
    skillref:React.RefObject<HTMLDivElement>,
    contactref:React.RefObject<HTMLDivElement>,
}

export const Nav =({
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
            setShowNavToggler(null)
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
        <div className="nav">
            <div className="d-flex align-items-center justify-content-between wt-40">
                <span className="fw-bold fs-5 text-white roboto">
                    <span>
                        <FaAccusoft
                            color="#5258fb"
                            size="3rem"
                            className="me-1"
                        />
                    </span>
                    <span>
                        LawalH. I
                    </span>
                    </span>
                <span className="hamburger rounded-circle p-3 border-grey">
                    <FaAlignRight
                        color="grey"
                        size="1.5rem"
                        onClick={showNav}
                    />
                </span>
            </div>
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
                    <FaTimes
                        color="white"
                        size="1.5rem"
                        className="navLinkLinks hamburger"
                        onClick={hideNav}
                    />
                    <h6 className="navLinkLinks fs-6" onClick={()=>{
                            hideNav()
                    }}>Home</h6>
                    <h6 className="navLinkLinks fs-6" onClick={()=>{
                        if(skillref.current){
                             hideNav()
                            skillref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
                        }
                    }}>Skills</h6>
                    <h6 className="navLinkLinks fs-6" onClick={()=>{
                        if(projectref.current){
                             hideNav()
                            projectref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
                        }
                    }}>Projects</h6>
                    <h6 className="navLinkLinks fs-6" onClick={()=>{
                        if(contactref.current){
                             hideNav()
                            contactref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
                        }
                    }}>Contact</h6>
                    <a href='/LawalHamzatResume.pdf' download className="btn btn-md bg-blue text-white p-3" onClick={()=>hideNav()}>Download Cv</a>
                </div>
            </motion.div>
           
        </div>
    )
}