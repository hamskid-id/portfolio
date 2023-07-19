import { motion, useInView } from "framer-motion";
import { Divider } from "./divider";
import { Person } from "./person";
import {useRef} from "react";
import { variants } from "./varient";

export const Biograph=()=>{
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return(
        <>
        <div 
            ref={ref}
            className="row nunito bio-reverse">
            <div className="col-md-4">
                <div className="d-flex flex-column">
                    {
                        [
                            {
                                name:"BIOGRAPHY",
                                desc:"Hi, i'm hamzat, Frontend Developer, Passionate about building high-quality web applications that meet the needs of the end-users.I'm quietly confident, easy to work with and always welcome the chance to provide more insight to my technical abilities"
                            },
                            {
                                name:"CONTACTS",
                                desc:"Lagos state. +2349018378291. lawalhamzat27@gmail.com"
                            },
                            {
                                name:"SERVICES",
                                desc:"Web Application frontend developement"
                            }
                        ].map((info,index)=>{
                            const{
                                name,desc
                            }=info
                            return(
                                <motion.div
                                    animate={
                                        isInView ? "moveFromLeft":"returnToLeft"
                                    }
                                    variants={variants}
                                    key={index}
                                    className="d-flex flex-column align-items-start mb-5 moveFromLeft"
                                    >
                                    <p 
                                    className="fs-5 bbb">{name}</p>
                                    <p
                                    
                                     className="fs-6 text-start bbb op-4">{desc}</p>
                                </motion.div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="col-md-4 person-2">
                <Person
                    isInView={isInView}
                />
            </div>
            <div className="col-md-4">
                <div className="project">
                {
                        [
                            {
                                name:"YEARS OF EXPERIENCE",
                                desc:"02+"
                            },
                            {
                                name:"COMPLETED PROJECTS",
                                desc:"22+"
                            }
                        ].map((info,index)=>{
                            const{
                                name,desc
                            }=info
                            return(
                                <motion.div
                                    animate={
                                        isInView ? "moveFromRight":"returnToRight"
                                    }
                                    variants={variants}
                                    key={index}
                                    className="d-flex flex-column align-items-end mb-5 moveFromRight"
                                >
                                    <p className="fs-5 bbb">{name}</p>
                                    <p className="display-5 bbb op-4">{desc}</p>
                                </motion.div>
                            )
                        })
                    }
                </div>
            </div>
            <Divider/>

        </div>
        </>
        
    )
}
