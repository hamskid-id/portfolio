import { Biograph } from "./biograpgh"
import { Contact } from "./contact"
import { Footer } from "./footer"
import { Intro } from "./intro"
import { Nav } from "./nav"
import { Projects } from "./projects"
import { Skills } from "./skils"
import {useRef} from "react"
import { ToggleIcon } from "./toggler"

export const HomeScreen=()=>{
   
    const skillref= useRef<HTMLDivElement>(null)
    const projectref=  useRef<HTMLDivElement>(null)
    const contactref=  useRef<HTMLDivElement>(null)
    const Navref=  useRef<HTMLDivElement>(null)
    return(
        <div className="screen bio">
            <div ref={Navref}>
                <Nav
                    Navref={Navref}
                    projectref={projectref}
                    skillref={skillref}
                    contactref={contactref}
                />
            </div>
            <div>
                <Intro/>
            </div>
            <div>
                <Biograph/>
            </div>
            <div ref={skillref}>
                <Skills/>
            </div>
            <div ref={projectref}>
                <Projects/>
            </div>
            <div ref={contactref}>
                <Contact/>
            </div>
            <div>
                <ToggleIcon
                   Navref={Navref}
                    projectref={projectref}
                    skillref={skillref}
                    contactref={contactref}
                />
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}