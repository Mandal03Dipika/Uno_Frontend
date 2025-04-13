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

  const getImage = (card) => {
    if (card.color === "red") {
      if (card.type === "number") {
        switch (card.value) {
          case 0:
            return red0;
          case 1:
            return red1;
          case 2:
            return red2;
          case 3:
            return red3;
          case 4:
            return red4;
          case 5:
            return red5;
          case 6:
            return red6;
          case 7:
            return red7;
          case 8:
            return red8;
          case 9:
            return red9;
          default:
            break;
        }
      } else {
        switch (card.value) {
          case "skip":
            return redSkip;
          case "reverse":
            return redReverse;
          case "draw2":
            return redDraw2;
          default:
            break;
        }
      }
    } else if (card.color === "yellow") {
      if (card.type === "number") {
        switch (card.value) {
          case 0:
            return yellow0;
          case 1:
            return yellow1;
          case 2:
            return yellow2;
          case 3:
            return yellow3;
          case 4:
            return yellow4;
          case 5:
            return yellow5;
          case 6:
            return yellow6;
          case 7:
            return yellow7;
          case 8:
            return yellow8;
          case 9:
            return yellow9;
          default:
            break;
        }
      } else {
        switch (card.value) {
          case "skip":
            return yellowSkip;
          case "reverse":
            return yellowReverse;
          case "draw2":
            return yellowDraw2;
          default:
            break;
        }
      }
    } else if (card.color === "green") {
      if (card.type === "number") {
        switch (card.value) {
          case 0:
            return green0;
          case 1:
            return green1;
          case 2:
            return green2;
          case 3:
            return green3;
          case 4:
            return green4;
          case 5:
            return green5;
          case 6:
            return green6;
          case 7:
            return green7;
          case 8:
            return green8;
          case 9:
            return green9;
          default:
            break;
        }
      } else {
        switch (card.value) {
          case "skip":
            return greenSkip;
          case "reverse":
            return greenReverse;
          case "draw2":
            return greenDraw2;
          default:
            break;
        }
      }
    } else if (card.color === "blue") {
      if (card.type === "number") {
        switch (card.value) {
          case 0:
            return blue0;
          case 1:
            return blue1;
          case 2:
            return blue2;
          case 3:
            return blue3;
          case 4:
            return blue4;
          case 5:
            return blue5;
          case 6:
            return blue6;
          case 7:
            return blue7;
          case 8:
            return blue8;
          case 9:
            return blue9;
          default:
            break;
        }
      } else {
        switch (card.value) {
          case "skip":
            return blueSkip;
          case "reverse":
            return blueReverse;
          case "draw2":
            return blueDraw2;
          default:
            break;
        }
      }
    } else {
      switch (card.value) {
        case "wild":
          return wild;
        case "wild draw4":
          return draw4;
        default:
          break;
      }
    }
  };

  const myDeck = [];

  cards.forEach((card) => {
    const image = getImage(card);
    myDeck.push({
      color: card.color,
      value: card.value,
      type: card.type,
      image: image,
    });
  });

  const playCard = topCard ? getImage(topCard) : null;

  const handlePlayCard = (card) => {
    socket.emit("play_card", card);
    setTopCard({
      color: card.color,
      value: card.value,
      type: card.type,
    });
    setCards((prev) =>
      prev.filter(
        (c) =>
          !(
            c.color === card.color &&
            c.value === card.value &&
            c.type === card.type
          )
      )
    );
    setPlayableCards([]);
  };

  useEffect(() => {
    const onConnect = () => setMyId(socket.id);
    socket.on("connect", onConnect);
    socket.on("shuffled_card", (data) => setCards(data));
    socket.on("first_card", (card) => setTopCard(card));
    socket.on("card_played", ({ playerId, card }) => setTopCard(card));
    socket.on("your_turn", ({ playableCards, fullHand, topCard }) => {
      setCards(fullHand);
      setPlayableCards(playableCards);
      setTopCard(topCard);
    });
    socket.on("turn_change", ({ currentPlayerId }) => {
      setCurrentPlayerId(currentPlayerId);
    });

    return () => {
      socket.off("connect", onConnect);
      socket.off("shuffled_card");
      socket.off("first_card");
      socket.off("card_played");
      socket.off("your_turn");
      socket.off("turn_change");
    };
  }, []);

  return (
    <GameContext.Provider
      value={{ myDeck, playCard, playableCards, handlePlayCard }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContextProvider;
