import { useContext } from "react";
import ModeContext from "../ModeContext";

const useModeContext = () => {
    return useContext(ModeContext);
};

export default useModeContext;