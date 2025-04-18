import { useEffect, useState } from "react";
import GameContext from "./GameContext";
import socket from "../../../library/socket";

import red0 from "../../../assets/red0.webp";
import red1 from "../../../assets/red1.webp";
import red2 from "../../../assets/red2.webp";
import red3 from "../../../assets/red3.webp";
import red4 from "../../../assets/red4.webp";
import red5 from "../../../assets/red5.webp";
import red6 from "../../../assets/red6.webp";
import red7 from "../../../assets/red7.webp";
import red8 from "../../../assets/red8.webp";
import red9 from "../../../assets/red9.webp";
import redSkip from "../../../assets/red-skip.webp";
import redReverse from "../../../assets/red-reverse.webp";
import redDraw2 from "../../../assets/red-draw2.webp";

import yellow0 from "../../../assets/yellow0.webp";
import yellow1 from "../../../assets/yellow1.webp";
import yellow2 from "../../../assets/yellow2.webp";
import yellow3 from "../../../assets/yellow3.webp";
import yellow4 from "../../../assets/yellow4.webp";
import yellow5 from "../../../assets/yellow5.webp";
import yellow6 from "../../../assets/yellow6.webp";
import yellow7 from "../../../assets/yellow7.webp";
import yellow8 from "../../../assets/yellow8.webp";
import yellow9 from "../../../assets/yellow9.webp";
import yellowSkip from "../../../assets/yellow-skip.webp";
import yellowReverse from "../../../assets/yellow-reverse.webp";
import yellowDraw2 from "../../../assets/yellow-draw2.webp";

import green0 from "../../../assets/green0.webp";
import green1 from "../../../assets/green1.webp";
import green2 from "../../../assets/green2.webp";
import green3 from "../../../assets/green3.webp";
import green4 from "../../../assets/green4.webp";
import green5 from "../../../assets/green5.webp";
import green6 from "../../../assets/green6.webp";
import green7 from "../../../assets/green7.webp";
import green8 from "../../../assets/green8.webp";
import green9 from "../../../assets/green9.webp";
import greenSkip from "../../../assets/green-skip.webp";
import greenReverse from "../../../assets/green-reverse.webp";
import greenDraw2 from "../../../assets/green-draw2.webp";

import blue0 from "../../../assets/blue0.webp";
import blue1 from "../../../assets/blue1.webp";
import blue2 from "../../../assets/blue2.webp";
import blue3 from "../../../assets/blue3.webp";
import blue4 from "../../../assets/blue4.webp";
import blue5 from "../../../assets/blue5.webp";
import blue6 from "../../../assets/blue6.webp";
import blue7 from "../../../assets/blue7.webp";
import blue8 from "../../../assets/blue8.webp";
import blue9 from "../../../assets/blue9.webp";
import blueSkip from "../../../assets/blue-skip.webp";
import blueReverse from "../../../assets/blue-reverse.webp";
import blueDraw2 from "../../../assets/blue-draw2.webp";

import wild from "../../../assets/wild.webp";
import draw4 from "../../../assets/draw4.webp";

const GameContextProvider = ({ children }) => {
  const [cards, setCards] = useState([]);
  const [playableCards, setPlayableCards] = useState([]);
  const [topCard, setTopCard] = useState(null);
  const [currentPlayerId, setCurrentPlayerId] = useState(null);
  const [myId, setMyId] = useState(socket.id);
  const [count, setCount] = useState();
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [pendingWildCard, setPendingWildCard] = useState(null);
  const [uno, setUno] = useState(false);

  const getImage = (card) => {
    const { color, type, value } = card;
    const map = {
      red: {
        number: [red0, red1, red2, red3, red4, red5, red6, red7, red8, red9],
        skip: redSkip,
        reverse: redReverse,
        draw2: redDraw2,
      },
      yellow: {
        number: [
          yellow0,
          yellow1,
          yellow2,
          yellow3,
          yellow4,
          yellow5,
          yellow6,
          yellow7,
          yellow8,
          yellow9,
        ],
        skip: yellowSkip,
        reverse: yellowReverse,
        draw2: yellowDraw2,
      },
      green: {
        number: [
          green0,
          green1,
          green2,
          green3,
          green4,
          green5,
          green6,
          green7,
          green8,
          green9,
        ],
        skip: greenSkip,
        reverse: greenReverse,
        draw2: greenDraw2,
      },
      blue: {
        number: [
          blue0,
          blue1,
          blue2,
          blue3,
          blue4,
          blue5,
          blue6,
          blue7,
          blue8,
          blue9,
        ],
        skip: blueSkip,
        reverse: blueReverse,
        draw2: blueDraw2,
      },
    };

    if (type === "wild") return value === "wild draw4" ? draw4 : wild;
    if (type === "number") return map[color]?.number?.[value];
    return map[color]?.[value];
  };

  const myDeck = cards.map((card) => ({
    ...card,
    image: getImage(card),
  }));

  const playCard = topCard ? getImage(topCard) : null;

  const updateLocalStateAfterPlay = (card) => {
    setTopCard(card);
    setCards((prev) => {
      const index = prev.findIndex((c) => {
        if (card.type === "wild" || card.type === "wild draw4") {
          return c.type === card.type && c.value === card.value;
        }
        return (
          c.color === card.color &&
          c.value === card.value &&
          c.type === card.type
        );
      });
      if (index !== -1) {
        const newHand = [...prev];
        newHand.splice(index, 1);
        return newHand;
      }
      return prev;
    });
    setPlayableCards([]);
  };

  const handlePlayCard = (card) => {
    if (card.type === "wild") {
      setPendingWildCard(card);
      setShowColorPicker(true);
      return;
    }
    socket.emit("play_card", card);
    updateLocalStateAfterPlay(card);
  };

  const handleColorSelect = (color) => {
    if (!pendingWildCard) return;
    const updatedCard = { ...pendingWildCard, color };
    socket.emit("play_card", updatedCard);
    updateLocalStateAfterPlay(updatedCard);
    setPendingWildCard(null);
    setShowColorPicker(false);
  };

  const colorMap = {
    red: "bg-red-500",
    blue: "bg-blue-500",
    green: "bg-green-500",
    yellow: "bg-yellow-500",
  };

  const otherPlayers = count
    ? Object.entries(count || {}).filter(([id]) => id !== myId)
    : null;

  const playerPositions = [
    {
      className: "absolute w-96 -rotate-90 top-80 right-5",
      name: "Player 2",
    },
    { className: "absolute w-96 rotate-180 top-32", name: "Player 3" },
    {
      className: "absolute w-96 rotate-90 left-5 top-80",
      name: "Player 4",
    },
  ];

  const takeCard = () => {
    if (currentPlayerId === myId) {
      socket.emit("take_card");
      setPlayableCards([]);
    }
  };

  const hitUno = () => {
    if (cards.length == 1) {
      console.log("Uno");
      setUno(true);
      socket.emit("hit_uno");
    }
  };

  useEffect(() => {
    const onConnect = () => setMyId(socket.id);
    socket.on("connect", onConnect);
    socket.on("shuffled_card", (data) => setCards(data));
    socket.on("first_card", (card) => setTopCard(card));
    socket.on("card_played", ({ playerId, card }) => setTopCard(card));
    socket.on("card_count", (count) => setCount(count));
    socket.on("your_turn", ({ playableCards, fullHand, topCard }) => {
      setCards(fullHand);
      setPlayableCards(playableCards);
      setTopCard(topCard);
    });
    socket.on("turn_change", ({ currentPlayerId }) => {
      setCurrentPlayerId(currentPlayerId);
    });
    socket.on("uno_penalty", ({ playerId, newHand }) => {
      if (myId === playerId && cards.length === 1) {
        console.log("Penalty 2 cards");
        setCards(newHand);
      }
    });
    socket.on("uno_called", ({ playerId }) => {
      if (myId === playerId && cards.length === 1) {
        console.log("UNO!");
      }
    });
    socket.on("draw_card", ({ newHand, drawnCards }) => {
      const updatedHand = newHand.map((c) => ({
        ...c,
        image: getImage(c),
      }));
      setCards(updatedHand);
    });

    return () => {
      socket.off("connect", onConnect);
      socket.off("shuffled_card");
      socket.off("first_card");
      socket.off("card_played");
      socket.off("your_turn");
      socket.off("turn_change");
      socket.off("uno_penalty");
      socket.off("uno_called");
      socket.off("draw_card");
    };
  }, []);

  console.log(currentPlayerId === myId ? "Your Turn" : "");

  return (
    <GameContext.Provider
      value={{
        myDeck,
        playCard,
        playableCards,
        handlePlayCard,
        otherPlayers,
        playerPositions,
        showColorPicker,
        setShowColorPicker,
        setPendingWildCard,
        handleColorSelect,
        colorMap,
        takeCard,
        hitUno,
        uno,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContextProvider;
