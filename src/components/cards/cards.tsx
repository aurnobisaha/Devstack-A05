import React, { use, type Dispatch, type SetStateAction } from "react";
import type { Icards } from "../../types/cards";
import AvailableCards from "./AvailableCards";

interface cardsprops {
  cardspromise: Promise<Icards[]>;
  selectedCards: Icards[];
  setSelectedCards: Dispatch<SetStateAction<Icards[]>>;
}
const Cards = ({ cardspromise, selectedCards, setSelectedCards }: cardsprops) => {
  const cards = use(cardspromise);

  return (
    <div className=" mt-8">
      
      <AvailableCards
        cards={cards}
        selectedCards={selectedCards}
        setSelectedCards={setSelectedCards}
      />
     
    </div>
  );
};
export default Cards;
