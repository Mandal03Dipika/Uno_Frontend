import uno from "../../assets/uno.png";
import wild from "../../assets/wild.webp";
import draw4 from "../../assets/draw4.webp";
import redDraw2 from "../../assets/red-draw2.webp";
import greenDraw2 from "../../assets/green-draw2.webp";
import yellowSkip from "../../assets/yellow-skip.webp";
import blueSkip from "../../assets/blue-skip.webp";
import blueReverse from "../../assets/blue-reverse.webp";
import yellowReverse from "../../assets/yellow-reverse.webp";
import useModeContext from "./context/features/useModeContext";

import setting from "../../assets/setting.png";
import Model from "../Model/Model";

function Mode() {
  const { gamePage, showSetting, showModel } = useModeContext();
  return (
    <>
      <div
        className="h-screen w-screen relative overflow-hidden
                        bg-linear-to-r/oklab from-indigo-500 to-teal-400
                        flex justify-center items-center"
      >
        <button
          onClick={() => showSetting()}
          className="cursor-pointer z-50 font-extrabold text-2xl text-white p-5 rounded-2xl flex justify-center items-center shadow shadow-white bg-radial from-pink-400 from-40% to-fuchsia-700"
        >
          <img
            src={setting}
            alt="setting"
            className="absolute top-5 right-5 h-10 animate-spin ease-in-out"
          />
        </button>
        <img
          src={wild}
          alt="wild card"
          className="absolute rotate-45 -top-48 -right-48 opacity-35"
        />
        <img
          src={draw4}
          alt="draw4"
          className="absolute rotate-45 -bottom-48 -left-48 opacity-35"
        />
        <img
          src={redDraw2}
          alt="draw2"
          className="absolute -rotate-45 -top-48 -left-48 opacity-35"
        />
        <img
          src={greenDraw2}
          alt="draw2"
          className="absolute -rotate-45 -bottom-48 -right-48 opacity-35"
        />
        <div className="w-screen flex justify-center animate-pulse">
          <img
            src={wild}
            alt="wild"
            className="absolute rotate-90 h-80 left-96 top-48 opacity-25"
          />
          <img
            src={draw4}
            alt="draw4"
            className="absolute rotate-90 h-80 right-96 top-48 opacity-25"
          />
          <img
            src={redDraw2}
            alt="red draw2"
            className="absolute  h-80 top-96 opacity-25"
          />
          <img
            src={greenDraw2}
            alt="green draw2"
            className="absolute  h-80 bottom-96 opacity-25"
          />
          <img
            src={yellowReverse}
            alt="yellow reverse"
            className="absolute rotate-45 h-80 bottom-6/12 right-3/12 opacity-25"
          />
          <img
            src={blueReverse}
            alt="blue reverse"
            className="absolute rotate-45 h-80 top-6/12 left-3/12 opacity-25"
          />
          <img
            src={yellowSkip}
            alt="yellow skip"
            className="absolute -rotate-45 h-80 bottom-6/12 left-3/12 opacity-25"
          />
          <img
            src={blueSkip}
            alt="blue skip"
            className="absolute -rotate-45 h-80 top-6/12 right-3/12 opacity-25"
          />
        </div>
        <div className="w-screen justify-center flex flex-row items-center gap-20 absolute">
          <img src={uno} alt="uno" className="h-72 animate-bounce" />
          <div className="flex flex-col gap-5">
            <button
              onClick={() => gamePage()}
              className="font-extrabold text-2xl text-white justify-center items-center
                                     rounded-2xl shadow shadow-white  flex text-center p-5
                                     bg-radial from-pink-400 from-40% to-fuchsia-700"
            >
              Computer vs
            </button>
            <button
              onClick={() => gamePage()}
              className="font-extrabold text-2xl text-white p-5
                                     rounded-2xl flex justify-center items-center shadow shadow-white
                                     bg-radial from-pink-400 from-40% to-fuchsia-700"
            >
              Multiplayer
            </button>
          </div>
        </div>
        {showModel && <Model />}
      </div>
    </>
  );
}

export default Mode;
