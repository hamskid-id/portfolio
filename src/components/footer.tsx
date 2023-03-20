import { FaLinkedinIn,FaGithub,FaWhatsapp,FaRegCopyright } from "react-icons/fa";
import { FaAccusoft } from "react-icons/fa";
export const Footer=()=>{
    return(
        <div className="d-flex flex-column bg-black align-items-center justify-content-center py-5 wr-12 px-3">
            <FaAccusoft
                color="#61dafb"
                size="4rem"
            />
            <p
            className="fs-5 text-white text-center grey mt-2">Living, Learning & Leveling up day by day.</p>
            <div className="d-flex justify-content-center mt-3">
                <a
                    href="https://www.linkedin.com/in/hamzat-lawal-b81771202"
                    className="me-5 border rounded-circle p-3"
                >
                    <FaLinkedinIn
                        size="1.3rem"
                        color="white"
                    />
                </a>
                <a
                    href="https://wa.me/+2349018378291"
                    className="me-5 border rounded-circle p-3"
                >
                    <FaWhatsapp
                        size="1.3rem"
                        color="white"
                    />
                </a>
                <a
                    href="https://github.com/hamskid-id"
                    className=" border rounded-circle p-3"
                >
                    <FaGithub
                        size="1.3rem"
                        color="white"
                    />
                </a>
            </div>
            <div className="mt-3">
                <span className="fs-6 text-start grey me-1">Handcrafted by me </span>
                <span>
                    <FaRegCopyright
                        size="1.3rem"
                        color="white"
                    />
                </span>
                <span className="fs-5 text-start grey ms-1">LawalH</span>
            </div>
        </div>
    )
}