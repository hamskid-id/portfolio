import {useRef,useState} from "react"
import { Mobilenav } from "./mobileNav";

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
            <Mobilenav
                showNavToggler={showNavToggler}
                Navref={Navref}
                hideNav={hideNav}
                projectref={projectref}
                contactref={contactref}
                skillref={skillref}
                navRef={navRef}
                />
        </div>
    )
}