import { Biograph } from "./biograpgh"
import { Contact } from "./contact"
import { Footer } from "./footer"
import { Intro } from "./intro"
import { Nav } from "./nav"
import { Projects } from "./projects"
import { Skills } from "./skils"
import {useRef} from "react"

export const HomeScreen=()=>{
   
    const skillref= useRef<HTMLDivElement>(null)
    const projectref=  useRef<HTMLDivElement>(null)
    const contactref=  useRef<HTMLDivElement>(null)
    return(
        <div className="screen bio">
            <div>
                <Nav
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
                <Footer/>
            </div>
        </div>
    )
}