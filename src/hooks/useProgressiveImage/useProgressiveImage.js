import { useState, useMemo  } from "react";



export default function useProgressiveImage(src) {  
    const [sourceLoaded, setSourceLoaded] = useState(null)

    useMemo(() => {
        const img = new Image()
        img.src = src
        img.onload = () => setSourceLoaded(src)
    }, [src]);


    return sourceLoaded 
}