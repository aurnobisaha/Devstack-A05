import React, {type Dispatch, type SetStateAction } from 'react';
import type { Icards } from '../../types/cards';
import { toast } from 'react-toastify';

interface  ICardsdesignProps{
  card:Icards;
  selectedCards:Icards[];
    setSelectedCards:Dispatch<SetStateAction<Icards[]>>;
  
}

const Cardsdesign = ({card, selectedCards,setSelectedCards}:ICardsdesignProps) => {
    const isSelected = selectedCards.some((selectedCard) => selectedCard.name === card.name);
    //console.log(isSelected,"isSelected:");
    
               return (
                 <div key={card.name}  className="card bg-base-100 shadow-sm">
                   <div className="card-body">
       
                     <div className="flex justify-between items-center">
                       <img
                         src={card.icon}
                         alt={card.name}
                         className="w-10 h-10 sm:w-12 sm:h-12"
                       />
       
                       {card.badge && <span>{card.badge}</span>}
                     </div>
       
                     <div className="px-2 sm:px-4">
                       <h2 className="tet-lg sm:text-xl font-bold">
                         {card.name}
                       </h2>
       
                       <p className="text-sm mt-2 text-[#64748B]">
                         {card.description}
                       </p>
                     </div>
       
                     <div className="flex flex-wrap items-center gap-2 px-2 sm:px-4 mt-4 ">
       
                       <span className="btn btn-xs badge-ghost text-[#475569] text-xs whitespace-nowrap">
                         {card.category}
                       </span>
       
                       <span className="btn btn-ghost text-[#64748B] text-xs">
                         {card.difficulty}
                       </span>
       
                       <span className="ml-auto text-xs text-[#334155]">
                         ⭐ 
                       </span>
                       <span>{card.rating}</span>
       
                     </div>
       
                     <div className="flex justify-between items-center p-2 sm:p-4 mt-2">
                       <button
                         onClick={() => {
                             
                           setSelectedCards([...selectedCards, card]);
                            toast(`${card.name} added to stack!`);
       
                         }}
                         disabled={isSelected}
                         className="btn w-full btn-wide bg-black text-white border-black disabled:bg-gray-400 disabled:text-gray-200 disabled:border-gray-400 disabled:cursor-not-allowed"
                         
                       >
                        {isSelected === true ? "Selected": "Add to Stack"}
                       </button>
                       
                     </div>
       
                   </div>
                 </div>
               );
             }
        



export default Cardsdesign;