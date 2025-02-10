import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setScreen } from "../screenSize/screenSlice";

const useIsMobile = () => {
    const dispatch = useDispatch();
    
    // Define the expected Redux state type
    const { isMobile,isDesktop,sSize,currPxl } = useSelector((state:any) => state.screen);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            const screenSize = {
                currPxl:width,
                sSize: width <= 767 ? "mobile" : "desktop",
                isMobile: width <= 767,
                // isTablet: width > 640 && width <= 1024,
                isDesktop:width>=768
            };
            dispatch(setScreen(screenSize)); // Pass an object, not just a string
        };

        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, [dispatch]);

    return { isMobile, isDesktop ,sSize,currPxl};
};

export default useIsMobile;
