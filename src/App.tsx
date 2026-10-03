import { Suspense, useState } from "react";

import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Cards from "./components/cards/cards";
import Footer from "./components/Footer";

import type { Icards } from "./types/cards";

const cardsfetch = async (): Promise<Icards[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  const [selectedCards, setSelectedCards] = useState<Icards[]>([]);

  const cardspromise = cardsfetch();

  return (
    <>
      <Nav />
      <Banner />

      <div className="px-25">
        <h1 className="text-4xl font-bold text-[#0F172A]">
          Explore{" "}
          <span className="bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
            the Technologies
          </span>
        </h1>

        <p className="text-[#64748B]">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <Suspense fallback={<h2>Loading.....</h2>}>
        <div className="grid grid-cols-4 gap-6 px-8">

          
          <div className="col-span-3">
            <Cards
              cardspromise={cardspromise}
              selectedCards={selectedCards}
              setSelectedCards={setSelectedCards}
            />
          </div>

         
          <div className="bg-white rounded-2xl border border-slate-200 p-5 mt-8 self-start">

            <h2 className="text-xl font-bold text-[#0F172A]">
              Your Stack
            </h2>

       
            {selectedCards.length > 0 && (
              <p className="text-sm text-[#94A3B8] mt-1">
                {selectedCards.length} Technology Selected
              </p>
            )}

            
            {selectedCards.length === 0 ? (
              <div className="border border-dashed border-[#CBD5E1] rounded-xl h-20 mt-4 flex items-center justify-center">
                <p className="text-[#94A3B8] text-sm">
                  No technologies yet
                </p>
              </div>
            ) : (
         
              <div className="mt-5 space-y-2">

                {selectedCards.map((card) => (
                  <div
                    key={card.name}
                    className="border border-[#E2E8F0] rounded-lg p-3 flex items-center justify-between"
                  >

                    <div className="flex items-center gap-3">

                      <img
                        src={card.icon}
                        alt={card.name}
                        className="w-8 h-8"
                      />

                      <div>
                        <p className="text-sm font-semibold text-[#0F172A]">
                          {card.name}
                        </p>

                        <p className="text-xs text-[#94A3B8]">
                          {card.category}
                        </p>
                      </div>

                    </div>

                    
                    <button
                      onClick={() => {
                        setSelectedCards(
                          selectedCards.filter(
                            (item) => item.name !== card.name
                          )
                        );
                      }}
                      className="text-[#94A3B8] hover:text-red-500 text-xl"
                    >
                      ×
                    </button>

                  </div>
                ))}

                
                <button
                  onClick={() => setSelectedCards([])}
                  className="w-full border border-[#FCA5A5] text-[#D82C20] font-bold rounded-lg py-2 mt-12 text-sm font-semibold hover:bg-red-50"
                >
                  Remove All
                </button>

              </div>
            )}

          </div>
        </div>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;