import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setScreen } from "../screenSize/screenSlice";

const useIsMobile = () => {
    const dispatch = useDispatch();
    
    // Define the expected Redux state type
    const { isMobile, isTablet } = useSelector((state:any) => state.screen);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            const screenSize = {
                sSize: width <= 600 ? "mobile" : width <= 1024 ? "tablet" : "desktop",
                isMobile: width <= 600,
                isTablet: width > 600 && width <= 1024
            };
            dispatch(setScreen(screenSize)); // Pass an object, not just a string
        };

        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, [dispatch]);

    return { isMobile, isTablet };
};

export default useIsMobile;
