import { useState } from "react";
import "./css/App.css";
import SmileySVG from "./components/svg/smiley";
import MenuSVG from "./components/svg/menu";
import PinSVG from "./components/svg/pin";
import { PlusIcon } from "@heroicons/react/solid";
import { MacrosCol, MacrosRow } from "./components/Macros";
import {
  InBoundMessageCard,
  OutBoundMessageCard,
} from "./components/Messaging";

const dummyMessages = [
  {
    type: "in",
    username: "Eleanor Pena",
    messages: [
      "Immersive chat startups have a very different vision for the future of voice",
      "What to Watch on Wednesday: Peacock finally hatches with Brave New World, Psych 2, and more",
    ],
  },
  {
    type: "out",
    username: "Guy Hawkins — Cartloop",
    messages: [
      "Why Netflix shares are down 10%",
      "Ted Sarandos named co-CEO at Netflix",
    ],
  },
  {
    type: "in",
    username: "Wade Warren",
    messages: [
      "The Calm meditation app is getting its own celebrity-filled HBO Max show",
      "Apple opens another megastore in China amid William Barr criticism",
    ],
  },
];

function App() {
  const [message, setMessage] = useState(
    "Hello Elsa 👋. My name is Jason. What can I do for you today?"
  );
  const [messages, setMessages] = useState(dummyMessages);

  const useMacro = (macro: string) => {
    setMessage(macro);
  };

  const sendMessage = () => {
    setMessages([
      ...messages,
      {
        type: "out",
        username: "Jason — Cartloop",
        messages: [message],
      },
    ]);
    setMessage("");
  };

  return (
    <div className="min-h-screen p-4 bg-white flex">
      <main className="w-full xl:w-3/4 h-screen">
        <div className="mb-8 bg-gray-100 rounded-xl overflow-y-scroll h-70vh">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="font-bold text-gray-400">In progress</div>
            <div className="flex items-center">
              <MenuSVG className="w-5 h-5" />
            </div>
          </div>
          <hr className="border" />

          <div className="p-4">
            {messages.map((message, index) => {
              if (message.type === "in") {
                return (
                  <InBoundMessageCard
                    key={index}
                    username={message.username}
                    messages={message.messages}
                  />
                );
              }

              return (
                <OutBoundMessageCard
                  key={index}
                  username={message.username}
                  messages={message.messages}
                />
              );
            })}
          </div>
        </div>

        <div className="p-2 mb-8 bg-gray-100 rounded-xl">
          <div className="xl:hidden">
            <MacrosRow macroClick={useMacro} />
          </div>

          <div className="px-6 py-4 bg-white rounded-lg shadow-md">
            <div className="mb-4">
              <textarea
                rows={2}
                className="w-full focus:outline-none appearance-none"
                placeholder="Type a message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>

            <hr className="" />

            <div className="flex justify-between pt-6 pb-2">
              <div className="flex justify-between w-1/2">
                <div className="bg-primary rounded-full w-8 h-8 flex justify-center items-center">
                  <PlusIcon className="h-5 w-5 text-white" />
                </div>
                <div className="flex w-1/2 items-center justify-between">
                  <div>
                    <PinSVG className="w-7 h-7" />
                  </div>
                  <div>
                    <SmileySVG className="w-7 h-7" />
                  </div>
                </div>
              </div>
              <div className="w-1/2 text-right">
                <button
                  onClick={() => sendMessage()}
                  className="px-3 py-1 text-white bg-primary rounded-md"
                >
                  Resolve
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="hidden xl:flex w-1/4">
        <MacrosCol macroClick={useMacro} />
      </div>
    </div>
  );
}

export default App;
