import { motion} from "framer-motion";
import {FaArrowRight, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { variants } from "./varient";


type view={
    isInView:true|false
}
export default function SimpleSlider({isInView}:view) {
    return (
      <div className="w-100 bg-black row justify-content-between">
            {
                [
                    {
                        image:"https://res.cloudinary.com/hamskid/image/upload/v1679496730/4a724ba6-0b4f-43e2-9887-1f89d4edcfca_qa81ge.jpg",
                        name:"MetaBnb clone",
                        github:"https://github.com/hamskid-id/zuritask3",
                        link:"https://hamskid-id.github.io/zuritask3/",
                        stack:["Reactjs","bootstrap"]
                    },
                    {
                        image:"https://res.cloudinary.com/hamskid/image/upload/v1679496731/b4401e4e-faaa-4492-adf1-4c3199bc800c_y5sck0.png",
                        name:"Ecommerce website",
                        link:"https://webcommerce.onrender.com/",
                        github:"https://github.com/hamskid-id/FERendercommerceApp",
                        stack:["Reactjs","Bootstrap","Nodejs"]
                    },
                    {
                        image:"https://res.cloudinary.com/hamskid/image/upload/v1679496732/1a41c815-0cb4-4eff-a041-345b76ebe106_ryal3f.jpg",
                        name:"Sensitive clone",
                        github:"#",
                        link:"https://peaceful-gates-6797a8.netlify.app/",
                        stack:["Html","Css","Javascript"]
                    },
                    {
                        image:"https://res.cloudinary.com/hamskid/image/upload/v1681416331/cf31d628-8749-49d2-8a1c-696af925da6a_ishekz.jpg",
                        name:"Email dahboard",
                        github:"https://github.com/hamskid-id/Emailmarketing",
                        link:"https://emailmarketing-nine.vercel.app/",
                        stack:["Reactjs","bootstrap","Php"]
                    },
                    {
                      image:"https://res.cloudinary.com/hamskid/image/upload/v1679496729/b536081a-b1d0-4625-8646-7a4d7ba24d3e_qom4of.png",
                      name:"Apply For Me",
                      link:"https://applyforme.app/",
                      stack:["Reactjs","Java"]
                  },{
                      image:"https://res.cloudinary.com/hamskid/image/upload/v1680390204/7fa63c89-d0b4-4a64-ab4e-f4cbaebf71d8_s7f1tb.png",
                      name:"MovieFlix",
                      link:"https://movieflix-rust.vercel.app/",
                      github:"https://github.com/hamskid-id/movieflix",
                      stack:["Reactjs","Typescript","bootstrap"]
                  }
                ].map((slide,index)=>{
                    const {name, image, link,stack} = slide;
                    return(

                        <motion.div
                            animate={
                                isInView ? "moveFromLeft":"returnToLeft"
                            }
                            variants={variants} 
                            className="moveFromLeft col-md-4 mb-4"
                            key={index}>
                            <div className="d-flex flex-column align-items-start justify-content-center mrx-5">                                
                                <img 
                                    src={image}
                                    alt="object not found"
                                    className="w-100 mb-3 project_img"
                                />
                                
                                <div className="d-flex align-items-center justify-content-between w-100">
                                  <span className="bbb text-start">
                                        {name}
                                  </span>
                                  <span className="d-flex">
                                    <a href={link} className="me-2">
                                      <FaExternalLinkAlt
                                        size="2rem"
                                        color="grey"
                                        className="viewdemo"
                                      />
                                    </a>
                                    <a href={link}>
                                      <FaGithub
                                          size="2rem"
                                          color="grey"
                                          className="viewdemo"
                                      />
                                    </a>
                                  </span>
                                </div>
                                <div className="d-flex wrap">
                                  {
                                    stack.map(st=> <span
                                      style={{
                                        fontFamily: `'Karla', sans-serif`,
                                        }} 
                                      className="mb-1 me-2 bg bbb op-4 tag">{st}</span>)
                                  }
                                </div>                                   
                            </div>
                        </motion.div> 
                    )
                })
            }
    </div>
    );
}
