import useGameContext from "./context/features/useGameContext";
import uno from "../../assets/uno.png";
import useThemeContext from "../../context/features/useThemeContext";

function Game() {
  const { myDeck, playCard, playableCards, handlePlayCard } = useGameContext();
  const { theme } = useThemeContext();

  return (
    <>
      <div
        className="h-screen w-screen overflow-hidden
                  bg-linear-to-r/oklab from-indigo-500 to-teal-400
                  flex flex-col items-center relative"
      >
        <img
          src={uno}
          alt=""
          className="h-72 m-auto opacity-50 animate-pulse"
        />
        <div
          className="border-slate-600 border-2 h-36 w-56
               flex flex-row justify-center items-center rounded-3xl
               shadow-inner shadow-slate-800 absolute top-5/12"
        >
          <img
            src={theme}
            alt=""
            className="h-28 rounded-lg shadow-md shadow-slate-800"
          />
          <img
            src={playCard}
            alt=""
            className="h-28  relative left-4"
          />

        </div>

        <div className="size-20 rounded-full bg-red-500 
        absolute bottom-5/12 left-7/12 flex items-center justify-center shadow-inner shadow-slate-800 ">
          <img src={uno} alt="uno-btn" className="h-12 animate-pulse delay-200 ease-in-out" />
        </div>
        <div className="absolute w-96  -rotate-90 top-80 right-5 ">
          <h5 className="relative bottom-3 font-bold">player2</h5>
          <hr className="bg-slate-600  w-96 relative bottom-3" />
          <div className="flex ">
            {[...Array(12)].map((_, index) => (
              <img
                key={index}
                src={theme}
                alt="card"
                className="h-28 absolute"
                style={{ left: `${index * 20}px` }}
              />
            ))}
          </div>
        </div>
        <div className="absolute w-96 rotate-180 top-32">
          <h5 className="relative bottom-3 font-bold rotate-180 right-80">player3</h5>
          <hr className="bg-slate-600  relative bottom-3 right" />
          <div className="flex  ">
            {[...Array(12)].map((_, index) => (
              <img
                key={index}
                src={theme}
                alt="card"
                className="h-28 absolute"
                style={{ left: `${index * 20}px` }}
              />
            ))}
          </div>
        </div>
        <div className="absolute w-96  rotate-90 left-5 top-80">
          <h5 className="relative bottom-3 font-bold">player4</h5>
          <hr className="bg-slate-600  relative bottom-3 " />
          <div className="flex  ">
            {[...Array(12)].map((_, index) => (
              <img
                key={index}
                src={theme}
                alt="card"
                className="h-28 absolute"
                style={{ left: `${index * 20}px` }}
              />
            ))}
          </div>
        </div>
        <div className="absolute w-96 bottom-32 ">
          <h5 className="relative bottom-3 font-bold">player1</h5>
          <hr className="bg-slate-600 h-0.5 relative bottom-3 right" />
          <div className="flex  ">
            {myDeck.map((card, index) => {
              const isPlayable = playableCards.some(
                (p) =>
                  p.color === card.color &&
                  p.value === card.value &&
                  p.type === card.type
              );

              return (
                <img
                  key={index}
                  src={card.image}
                  alt={`${card.color} ${card.value}`}
                  className={`h-28 absolute transition-all duration-200 ease-in-out hover:scale-110 hover:cursor-pointer`}
                  style={{
                    left: `${index * 25}px`,
                    top: isPlayable ? "5px" : "22px",
                  }}
                  onClick={() => isPlayable && handlePlayCard(card)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Game;
