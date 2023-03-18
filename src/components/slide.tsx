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
        speed: 2000,
      slidesToShow: 2,
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
            slidesToScroll: 1
          }
        }
        ]
      };

    return (
      <motion.div
        animate={
            isInView ? "moveFromLeft":"returnToLeft"
        }
        variants={variants} 
        className="w-100 prr-5 moveFromLeft"
        >
        <Slider {...settings}>
            {
                [
                    {
                        image:"https://res.cloudinary.com/hamskid/image/upload/v1678948953/screencapture-hamskid-id-github-io-zuritask3-2023-03-15-22_53_50_gkesku.png",
                        name:"MetaBnb clone",
                        link:"https://hamskid-id.github.io/zuritask3/"
                    },
                    {
                        image:"https://res.cloudinary.com/hamskid/image/upload/v1678948881/screencapture-emailmarketing-nine-vercel-app-auth-login-2023-03-15-22_40_33_fcznzv.png",
                        name:"Emailmarketting dashboard",
                        link:"https://emailmarketing-nine.vercel.app/"
                    },
                    {
                        image:"https://res.cloudinary.com/hamskid/image/upload/v1678948955/screencapture-webcommerce-onrender-2023-03-15-22_44_47_nplmnx.png",
                        name:"Ecommerce website",
                        link:"https://webcommerce.onrender.com/"
                    },
                    {
                        image:"https://res.cloudinary.com/hamskid/image/upload/v1678948877/screencapture-availableproduct-b0af4-web-app-board-Second-board-2023-03-15-22_46_52_tapybc.png",
                        name:"Kanban task tracker",
                        link:"https://availableproduct-b0af4.web.app/"
                    },
                    {
                        image:"https://res.cloudinary.com/hamskid/image/upload/v1678948941/screencapture-webdelivery-onrender-2023-03-15-22_50_08_dcebfy.png",
                        name:"Delivery website",
                        link:"https://webdelivery.onrender.com/"
                    },
                ].map((slide,index)=>{
                    const {name, image, link} = slide;
                    return(
                        <div key={index}>
                            <div className="d-flex flex-column align-items-start justify-content-start mrx-5">                                
                                <img 
                                    src={image}
                                    alt="object not found"
                                    className="w-100 full-r-12 mb-4 slide-img"
                                />
                                <h6 className="grey fs-6">web</h6>
                                <h6 className="fw-bold text-white fs-5 text-start">{name}</h6>
                                <a 
                                    className="link-nav mt-2"
                                    href={link}>
                                    View demo <span><FaArrowRight/></span>
                                </a>                                   
                            </div>
                        </div> 
                    )
                })
            }
        </Slider>
    </motion.div>
    );
}
