import React, { useState } from "react";
import ChevronDownSVG from "./svg/chevron-down";

const macros = [
  "Immersive chat startups have a very different vision for the future of voice",
  "Hello user 👋. My name is expert. What can I do for you today?",
  "Apple opens another megastore in China amid William Barr criticism",
];

type MacrosType = {
  macroClick: (macro: string) => void;
};

type MacroCardType = {
  text: string;
};

export const MacrosRow: React.FC<MacrosType> = ({ macroClick }) => {
  const [macrosOpen, setMacrosOpen] = useState(true);

  const MacrosCard: React.FC<MacroCardType> = ({ text }) => (
    <div
      onClick={() => macroClick(text)}
      className="min-w-3/4 md:min-w-1/2 p-4 bg-cl-gray rounded-lg mr-4 border-4 border-transparent border-solid hover:border-primary cursor-pointer"
    >
      {text}
    </div>
  );

  return (
    <div className="px-3 py-4 mb-4 bg-white rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-4">
        <div className="font-bold">Macros</div>
        <button type="button" onClick={(e) => setMacrosOpen(!macrosOpen)}>
          <ChevronDownSVG
            className={`w-5 h-5 transform ${
              macrosOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>
      </div>

      {macrosOpen ? (
        <div className="flex pt-1 pb-4 flex-no-wrap justify-between overflow-x-scroll">
          {macros.map((text, index) => (
            <MacrosCard key={index} text={text} />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export const MacrosCol: React.FC<MacrosType> = ({ macroClick }) => {
  const [macrosOpen, setMacrosOpen] = useState(true);

  const MacrosCard: React.FC<MacroCardType> = ({ text }) => (
    <div
      onClick={() => macroClick(text)}
      className="p-4 bg-white rounded-lg mb-2 shadow-md border-4 border-transparent border-solid hover:border-primary cursor-pointer"
    >
      {text}
    </div>
  );

  return (
    <div className="px-3 py-4 bg-cl-gray rounded-lg ml-4 w-full">
      <div className="flex items-center justify-between mb-4">
        <div className="font-bold">Macros</div>
        <button type="button" onClick={(e) => setMacrosOpen(!macrosOpen)}>
          <ChevronDownSVG
            className={`w-5 h-5 transform ${
              macrosOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>
      </div>

      {macrosOpen ? (
        <div className="flex flex-col pt-1 pb-4">
          {macros.map((text, index) => (
            <MacrosCard key={index} text={text} />
          ))}
        </div>
      ) : null}
    </div>
  );
};
