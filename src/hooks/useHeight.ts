import { useEffect, useState } from "react";
import { Tquery } from "./types/type";

const useScrollHeight = (query: Tquery): boolean => {
    const [matches, setMatches] = useState<boolean>(false)

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.pageYOffset;
            if (scrollPosition > 200) {
                setMatches(true);
            } else {
                setMatches(false);
            }
          };
      
          window.addEventListener("scroll", handleScroll);
          return () => window.removeEventListener("scroll", handleScroll);
    }, [matches, query])

    return matches
}

export default useScrollHeight