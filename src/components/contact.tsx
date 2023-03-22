import { FaRegComment,FaPencilAlt,FaArrowRight } from "react-icons/fa";
import {useRef,useEffect} from "react";
import { variants } from "./varient";
import { motion, useInView } from "framer-motion";
// import { useForm} from "react-hook-form";
import { useForm, ValidationError } from '@formspree/react';
import { toast } from "react-toastify";


// type FormData = {
//     names: string,
//     mail: string,
//     project:string
//  };

export const Contact=()=>{
    const [state, handleSubmit] = useForm("mjvdonow");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const form = useRef();
    useEffect(()=>{
        if (state.succeeded) {
            toast("Successfully sent")
        }
    },[state])
    
    return(
        <div className="wt-75 m-auto p-4 bg bg-black">
            <h6 className="fs-1 nunito lightgrey mt-5 bg-black p-2 r-12">Contact Me</h6>
            <motion.h6
                animate={
                    isInView ? "staggered":"staggeredback"
                }
                variants={variants} 
                style={{
                    fontFamily: `'Montserrat Alternates', sans-serif`,
                }}
                className="fs-6 mb-5 staggered text-white bbb">Interested in working together? We should queue up a chat.
            </motion.h6>
                <div 
                    ref={ref}
                    className="d-flex justify-content-between wt-75 m-auto p-4 r-12 bg bg-black wrap">
                    <motion.div
                        animate={
                            isInView ? "moveFromLeft":"returnToLeft"
                        }
                        variants={variants} 
                        className="wt-50 mb-4 moveFromLeft">
                        <div className="fs-4 lightgrey fw-bold nunito mb-3">
                            <span>
                                <FaRegComment
                                    className="me-1"
                                    size="1rem"
                                    color="#434343"
                                />
                            </span>
                            <span className="fs-6 text-white">
                                Talk to Me
                            </span>
                        </div>
                        <div>
                            <h6  className="fs-6 text-white text-start fw-bold grey">Email</h6>
                            <h6  className="fs-6 text-white text-start grey break">lawalhamzat27@gmail.com</h6>
                        </div>
                        <div>
                            <h6  className="fs-6 text-white text-start mt-5 fw-bold grey">Whatsapp</h6>
                            <h6  className="fs-6 text-white text-start grey">+2349018378291</h6>
                            <a 
                                className="link-nav"
                                href="https://wa.me/+2349018378291">
                                Write me <span><FaArrowRight/></span>
                            </a>
                        </div>
                    </motion.div>
                    <motion.div
                        animate={
                            isInView ? "moveFromRight":"returnToRight"
                        }
                        variants={variants} 
                        className="wt-50 pb-4 moveFromRight">
                        <div className="fs-4 lightgrey fw-bold nunito mb-3">
                            <span>
                                <FaPencilAlt
                                     className="me-1"
                                     size="1rem"
                                     color="#434343"
                                />
                            </span>
                            <span className="fs-6 text-white">
                                Write your project
                            </span>
                        </div>
                        <form
                           onSubmit={handleSubmit}
                        >
                            <div className="d-flex flex-column mb-4">
                                <label 
                                    htmlFor="names"
                                    className="label ms-2 mb-2-"
                                >
                                    Name
                                </label>
                                <input 
                                    type="text" 
                                    id="names" 
                                    name="names"
                                    placeholder="Enter your names"
                                    className="p-2 rounded input rounded"
                                    required
                                />
                                <ValidationError 
                                    prefix="Names" 
                                    field="names"
                                    errors={state.errors}
                                />
                            </div>
                            <div className="d-flex flex-column mb-4">
                                <label 
                                    htmlFor="email"
                                    className="label ms-2 mb-2-"
                                >
                                    Email
                                </label>
                                <input 
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    className="p-2 rounded input rounded"
                                    required
                                />
                                <ValidationError 
                                    prefix="Email" 
                                    field="email"
                                    errors={state.errors}
                                />
                            </div>
                            <div className="d-flex flex-column mb-4">
                                <label 
                                    htmlFor="Project"
                                    className="label ms-2 mb-2-"
                                >
                                    Project
                                </label>
                                <textarea
                                    id="project"
                                    name="project"
                                    placeholder="Brief me on your project"
                                    className="p-2 rounded input rounded"
                                    required
                                />
                                <ValidationError 
                                    prefix="Project" 
                                    field="project"
                                    errors={state.errors}
                                />
                            </div>
                            <button 
                                className="btn bg-blue text-dark btn-md"
                                type="submit" 
                                disabled={state.submitting}>
                                Submit
                            </button>
                        </form>
                    </motion.div>
                </div>
        </div>
    )
}
