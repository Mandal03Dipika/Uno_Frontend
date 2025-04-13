import LandingContext from "./LandingContext";
import { useNavigate } from "react-router-dom";

const LandingContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const play = () => {
    return navigate("/selectMode");
  };

  return (
    <LandingContext.Provider value={{ play }}>
      {children}
    </LandingContext.Provider>
  );
};

export default LandingContextProvider;
