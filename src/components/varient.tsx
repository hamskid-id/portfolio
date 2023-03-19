export const variants = {
    moveFromLeft: { 
        opacity: 1,
        display:"block",
        x: 0, 
        transition: {
            duration: 0.8
        } 
    },
    returnToLeft:{
        opacity: 0,
        display:"none", 
        x: "-100%",
        transition: { 
            duration:0.8
       }
    },
    returnToRight:{
        opacity: 0, 
        display:"none", 
        x: "100%",
        transition: { 
            duration:0.8
       }
    },
    moveFromRight: {
         opacity: 1,
        display:"block",
         x: 0,
         transition: {
            duration:0.8
        } 
    },
    returnToTop:{
        opacity: 0, 
        display:"none", 
        y: "-50%",
        transition: { 
            duration:0.8
       }
    },
    moveFromTop: {
         opacity: 1,
        display:"block",
         y: 0,
         transition: {
            duration:0.8
        } 
    },
    staggered: { 
        opacity: 1, 
        display:"block",
        x: 0, 
        transition: { 
            staggerChildren: 0.07,
            duration:0.8
        } 
    },
    staggeredback: {
        opacity: 0, 
        display:"none",
        x: "-100%",
        transition: { 
        staggerChildren: 0.05, 
        duration:0.8,
        staggerDirection: -1 
        }   
    },
    open: { 
        opacity: 1, 
        x: 0, 
        transition: { 
            staggerChildren: 0.07, 
            delayChildren: 0.2 
        } 
    },
    default: { 
        opacity: 1
    },
    closed: {
         opacity: 0, 
         x: "-100%",
         transition: { 
            staggerChildren: 0.05, 
            staggerDirection: -1 
        } },
}