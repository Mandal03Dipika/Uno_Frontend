import { useContext } from "react";
import LandingContext from "../LandingContext";

const useLandingContext = () => {
    return useContext(LandingContext);
};

export default useLandingContext;