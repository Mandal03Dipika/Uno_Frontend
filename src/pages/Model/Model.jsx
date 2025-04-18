import useModeContext from "../Mode/context/features/useModeContext";
import "./model.css";

import unoTheme3 from "../../assets/uno_theme_3.png";
import unoTheme1 from "../../assets/uno_theme_1.png";
import unoTheme2 from "../../assets/UNO theme 2.png";
import useThemeContext from "../../context/features/useThemeContext";

function Model() {
  const { showSetting, setShowModel } = useModeContext();
  const { changeTheme } = useThemeContext();

  return (
    <>
      <div className="modal-wrapper">
        <div className="modal-container">
          <div className="modal-header">
            <button className="close-button" onClick={() => showSetting()}>
              &times;
            </button>
          </div>
          <div className="flex flex-col items-center justify-center modal-content space-y-4">
            <h1 className="text-2xl font-semibold">Theme</h1>
            <div className="flex space-x-4">
              <div
                className="cursor-pointer rounded-lg overflow-hidden border-2 border-transparent hover:border-blue-500"
                onClick={() => changeTheme(unoTheme1) && setShowModel(false)}
              >
                <img
                  src={unoTheme1}
                  alt="Light Theme"
                  className="w-24 h-24 object-cover"
                />
              </div>
              <div
                className="cursor-pointer rounded-lg overflow-hidden border-2 border-transparent hover:border-blue-500"
                onClick={() => changeTheme(unoTheme2) && setShowModel(false)}
              >
                <img
                  src={unoTheme2}
                  alt="Dark Theme"
                  className="w-24 h-24 object-cover"
                />
              </div>
              <div
                className="cursor-pointer rounded-lg overflow-hidden border-2 border-transparent hover:border-blue-500"
                onClick={() => changeTheme(unoTheme3) && setShowModel(false)}
              >
                <img
                  src={unoTheme3}
                  alt="System Theme"
                  className="w-24 h-24 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Model;
