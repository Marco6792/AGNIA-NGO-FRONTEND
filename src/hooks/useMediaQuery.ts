import { useState, useEffect } from "react";
import { Tquery } from "./types/type";

const useMediaQuery = (query: Tquery): boolean |any  => {
    const [matches, setMatches] = useState<boolean>(false)
    
    useEffect(() => {
        const media = window.matchMedia(query)
        if (media.matches !== matches) {
            setMatches(media.matches)
        }
        const listener = () => setMatches(media.matches)
        window.addEventListener("resize", listener)
        // CLean Up FUNC
        return () => window.removeEventListener("resize", listener)
        
    }, [matches, query])

    return  matches
}

export default useMediaQuery