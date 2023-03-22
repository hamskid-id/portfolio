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

export const Nav =({
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
                <span 
                    className="display-5"
                    style={{
                        fontFamily: `'Montserrat Alternates', sans-serif`,
                        fontWeight:"400",
                        color: "#bbb",
                        fontSize:"38px"
                    }}
                    >
                    <b>Law</b>alH. I
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
           
        </div>
    )
}