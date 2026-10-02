import React, {type Dispatch, type SetStateAction } from 'react';
import type { Icards } from '../../types/cards';
import Cardsdesign from './Cardsdesign';
interface IAvailableProps{
  cards:Icards[];
  selectedCards:Icards[];
  setSelectedCards:Dispatch<SetStateAction<Icards[]>>;
}

const AvailableCards = ({ cards, selectedCards,setSelectedCards }:IAvailableProps) => {
  console.log(cards, 'cards from available');

  return (
   
           <div className="col-span-3  grid grid-cols-3 gap-4 pl-15">
                {cards.map((card: Icards) => {
                  return <Cardsdesign key={card.name} card={ card} selectedCards={selectedCards} setSelectedCards={setSelectedCards}/>;
                })}
                </div>
                );
              };


  


export default AvailableCards;