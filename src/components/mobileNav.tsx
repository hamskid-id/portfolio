
import { motion} from "framer-motion";
import { variants } from "./varient";

interface refProps {
    Navref:React.RefObject<HTMLDivElement>,
    projectref:React.RefObject<HTMLDivElement>,
    skillref:React.RefObject<HTMLDivElement>,
    contactref:React.RefObject<HTMLDivElement>,
    navRef:React.RefObject<HTMLDivElement>,
    showNavToggler:true|false|null,
    hideNav:()=>void
}

export const Mobilenav=({
    showNavToggler,
    Navref,
    hideNav,
    projectref,
    contactref,
    skillref,
    navRef
}:refProps)=>{
    return(
        <>
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
        </>
    )
}