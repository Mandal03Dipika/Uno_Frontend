import uno from "../../assets/uno.png";
import playBtnImg from "../../assets/playbtn.png";
import useLandingContext from "./context/features/useLandingContext";
import wild from "../../assets/wild.webp";
import draw4 from "../../assets/draw4.webp";
import redDraw2 from "../../assets/red-draw2.webp";
import greenDraw2 from "../../assets/green-draw2.webp";
// import redDraw2 from "../../assets/red-draw2.webp";
// import greenDraw2 from "../../assets/green-draw2.webp";
import yellowSkip from "../../assets/yellow-skip.webp";
import blueSkip from "../../assets/blue-skip.webp";
import blueReverse from "../../assets/blue-reverse.webp";
import yellowReverse from "../../assets/yellow-reverse.webp";

function Landing() {
    const { play } = useLandingContext();
    return (
        <>
            <div className="h-screen w-screen relative overflow-hidden
            bg-linear-to-r/oklab from-indigo-500 to-teal-400
            flex justify-center items-center">
                <img src={wild} alt="wild card"
                    className="absolute rotate-45 -top-48 -right-48 opacity-35" />
                <img src={draw4} alt="draw4"
                    className="absolute rotate-45 -bottom-48 -left-48 opacity-35" />
                <img src={redDraw2} alt="draw2"
                    className="absolute -rotate-45 -top-48 -left-48 opacity-35 " />
                <img src={greenDraw2} alt="draw2"
                    className="absolute -rotate-45 -bottom-48 -right-48 opacity-35 " />
                <div className="w-96 flex flex-col items-center gap-12">
                    <img src={uno} alt="uno" className="h-72 animate-bounce" />
                    <div className="w-screen flex justify-center animate-pulse">
                        <img src={wild} alt="wild"
                            className="absolute rotate-90 h-32 left-5/12 top-8/12 opacity-25" />
                        <img src={draw4} alt="draw4"
                            className="absolute rotate-90 h-32 right-5/12 top-8/12 opacity-25" />
                        <img src={redDraw2} alt="red draw2"
                            className="absolute  h-32  top-9/12 opacity-25" />
                        <img src={greenDraw2} alt="green draw2"
                            className="absolute  h-32 top-7/12  justify-center opacity-25" />
                        <img src={yellowReverse} alt="yellow reverse"
                            className="absolute rotate-45 h-32 top-7/12 right-5/12 opacity-25" />
                        <img src={blueReverse} alt="blue reverse"
                            className="absolute rotate-45 h-32 top-9/12 left-5/12 opacity-25" />
                        <img src={yellowSkip} alt="yellow skip"
                            className="absolute -rotate-45 h-32 top-7/12 left-5/12 opacity-25" />
                        <img src={blueSkip} alt="blue skip"
                            className="absolute -rotate-45 h-32 top-9/12 right-5/12 opacity-25" />
                    </div>
                    <button onClick={() => play()}>
                        <img src={playBtnImg} alt="play button"
                            className="h-28 rounded-full shadow-red-300 shadow-2xl relative
                            bg-radial-[at_30%_30%] from-red-100 to-red-700 to-70%" />
                    </button>
                </div>
            </div>
        </>
    )
}

export default Landing;