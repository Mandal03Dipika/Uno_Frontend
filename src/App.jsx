import { useEffect } from "react";
import socket from "./library/socket";
import { Route, Routes } from "react-router-dom";
import LandingContextProvider from "./pages/Landing/context/LandingContextProvider";
import Landing from "./pages/Landing/Landing";
import Mode from "./pages/Mode/Mode";
import ModeContextProvider from "./pages/Mode/context/ModeContextProvider";
import Game from "./pages/Game/Game";
import GameContextProvider from "./pages/Game/context/GameContextProvider";
import ThemeContextProvider from "./context/ThemeContextProvider";

function App() {
  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to server:", socket.id);
    });
    return () => {
      socket.off("connect");
    };
  }, []);

  return (
    <>
      <ThemeContextProvider>
        <Routes>
          <Route
            path="/"
            element={
              <LandingContextProvider>
                <Landing />
              </LandingContextProvider>
            }
          />
          <Route
            path="/selectMode"
            element={
              <ModeContextProvider>
                <Mode />
              </ModeContextProvider>
            }
          />
          <Route
            path="/game"
            element={
              <GameContextProvider>
                <Game />
              </GameContextProvider>
            }
          />
        </Routes>
      </ThemeContextProvider>
    </>
  );
}

export default App;
