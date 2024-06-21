import { useActiveSection } from "../app/context/activeSection";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { SectionName } from "./types";

export function useSectionInView (sectionName : SectionName, threshold = 0.75) {
    const{ref,inView} = useInView({
        threshold,
    });
    const{setActiveSection, timeofLastClick} = useActiveSection();
useEffect(() => {
  if(inView && Date.now() - timeofLastClick > 1000){
    setActiveSection(sectionName);
  }
},[inView, timeofLastClick, sectionName]);
return {
    ref,

}

}