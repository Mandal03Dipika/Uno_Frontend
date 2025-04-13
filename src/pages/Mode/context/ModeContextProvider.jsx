import { useNavigate } from "react-router-dom";
import ModeContext from "./ModeContext";
import { useState } from "react";

const ModeContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [showModel, setShowModel] = useState(false);

  const showSetting = () => {
    console.log("setting");
    setShowModel(!showModel);
  };
  const gamePage = () => {
    return navigate("/game");
  };

  return (
    <ModeContext.Provider value={{ gamePage, showModel, showSetting }}>
      {children}
    </ModeContext.Provider>
  );
};

export default ModeContextProvider;
