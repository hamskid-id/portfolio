import { motion} from "framer-motion";
import Slider from "react-slick";
import {FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { variants } from "./varient";


type view={
    isInView:true|false
}
export default function SimpleSlider({isInView}:view) {
      const settings = {
        dots: true,
        infinite: true,
        className: "center",
        centerMode: true,
        centerPadding: "60px",
        speed: 2000,
      slidesToShow: 3,
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode:false,
          }
        }
        ]
      };

    return (
      <div className="w-100 bg-black">
        <Slider {...settings}>
            {
                [
                    {
                        image:"https://res.cloudinary.com/hamskid/image/upload/v1679496730/4a724ba6-0b4f-43e2-9887-1f89d4edcfca_qa81ge.jpg",
                        name:"MetaBnb clone",
                        link:"https://hamskid-id.github.io/zuritask3/",
                        stack:["Reactjs","bootstrap"]
                    },
                    {
                        image:"https://res.cloudinary.com/hamskid/image/upload/v1679496731/b4401e4e-faaa-4492-adf1-4c3199bc800c_y5sck0.png",
                        name:"Ecommerce website",
                        link:"https://webcommerce.onrender.com/",
                        stack:["Reactjs","Bootstrap","Nodejs"]
                    },
                    {
                        image:"https://res.cloudinary.com/hamskid/image/upload/v1679496732/1a41c815-0cb4-4eff-a041-345b76ebe106_ryal3f.jpg",
                        name:"Sensitive clone",
                        link:"https://peaceful-gates-6797a8.netlify.app/",
                        stack:["Html","Css","Javascript"]
                    },
                    {
                        image:"https://res.cloudinary.com/hamskid/image/upload/v1679496732/8eb9a2ec-b43d-4c64-8439-7932349cea90_wes2zs.png",
                        name:"Delivery website",
                        link:"https://webdelivery.onrender.com/",
                        stack:["Reactjs","Nodejs","Bootstrap"]
                    },{
                      image:"https://res.cloudinary.com/hamskid/image/upload/v1679496729/b536081a-b1d0-4625-8646-7a4d7ba24d3e_qom4of.png",
                      name:"Apply For Me",
                      link:"https://applyforme.app/",
                      stack:["Reactjs","Java"]
                  },{
                      image:"https://res.cloudinary.com/hamskid/image/upload/v1680390204/7fa63c89-d0b4-4a64-ab4e-f4cbaebf71d8_s7f1tb.png",
                      name:"MovieFlix",
                      link:"https://movieflix-rust.vercel.app/",
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
                            className="moveFromLeft"
                            key={index}>
                            <div className="d-flex flex-column align-items-start justify-content-start mrx-5 shadow">                                
                                <img 
                                    src={image}
                                    alt="object not found"
                                    className="w-100 mb-4"
                                />
                                <div className="p-2 d-flex align-items-start flex-column">
                                    <h6 className="grey fs-6">web</h6>
                                    <h6 className="fw-bold text-white fs-5 text-start">{name}</h6>
                                    <div className="d-flex wrap">
                                      {
                                        stack.map(st=> <span className="mb-1 badge me-2 bg lightgrey bg-dark">{st}</span>)
                                      }
                                    </div>
                                    <a 
                                        className="link-nav mt-2 bg-dark btn btn-sm"
                                        href={link}>
                                        View demo <span><FaArrowRight/></span>
                                    </a>
                                </div>                                   
                            </div>
                        </motion.div> 
                    )
                })
            }
        </Slider>
    </div>
    );
}
