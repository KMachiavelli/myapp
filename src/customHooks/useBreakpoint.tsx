import React, { useEffect, useState } from 'react'

export const useBreakpoint = () => {
    const [actualWidth, setActualWidth] = useState(0);
    useEffect(() => {
        window.addEventListener("resize", ()=>{
            setActualWidth(window.innerWidth);
        });
        setActualWidth(window.innerWidth);
    }, []);

    useEffect(()=>{
        window.addEventListener("resize", ()=>{
            setActualWidth(window.innerWidth);  
            console.log(actualWidth); 
            
           // window.removeEventListener("resize", ()=>{});
        })
    }, [window.innerWidth])
    return actualWidth;
}


export const isMobile = ( func = useBreakpoint) => {
    if(func() <= 600) return true;
    else return false;
}
