import React, { Fragment, useState } from "react";
import "./css/App.css";
import SmileySVG from "./components/svg/smiley";
import UserSVG from "./components/svg/user";
import MenuSVG from "./components/svg/menu";
import PinSVG from "./components/svg/pin";
import { PlusIcon } from "@heroicons/react/solid";
import { Transition } from "@headlessui/react";
import { MacrosCol, MacrosRow } from "./components/Macros";
import cartloopImage from "./assets/cartloop.png";

const sentMessage = {
  username: "Guy Hawkins — Cartloop",
  messages: [
    "Why Netflix shares are down 10%",
    "Ted Sarandos named co-CEO at Netflix",
  ],
};

const eleanorMessage = {
  username: "Eleanor Pena",
  messages: [
    "Immersive chat startups have a very different vision for the future of voice",
    "What to Watch on Wednesday: Peacock finally hatches with Brave New World, Psych 2, and more",
  ],
};

const wadeMessage = {
  username: "Wade Warren",
  messages: [
    "The Calm meditation app is getting its own celebrity-filled HBO Max show",
    "Apple opens another megastore in China amid William Barr criticism",
  ],
};

type SentMessageType = {
  username: string;
  messages: string[];
};

type RecievedMessageType = {
  username: string;
  messages: string[];
};

const SenderMessageCard: React.FC<SentMessageType> = ({
  username,
  messages,
}) => {
  return (
    <div className="flex mb-8">
      <div className="w-11/12 text-right">
        <div className="mb-1 text-sm">{username}</div>

        {messages.map((message: string, index: number) => (
          <div
            key={index}
            className={`p-4 text-white rounded-b-lg rounded-t-xl bg-primary ${
              index === 0
                ? "rounded-b-lg rounded-t-xl mb-2"
                : index === messages.length - 1
                ? "rounded-t-lg rounded-b-xl mb-0"
                : "rounded-lg mb-2"
            }`}
          >
            {message}
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center justify-end w-1/12">
        <img src={cartloopImage} className="h-5 w-5" alt="user logo" />
      </div>
    </div>
  );
};

const RecievedMessageCard: React.FC<RecievedMessageType> = ({
  username,
  messages,
}) => {
  return (
    <div className="mb-8">
      <div className="mb-2 text-sm">{username}</div>

      {messages.map((message: string, index: number) => {
        return (
          <Fragment key={index}>
            {index === 0 ? (
              <div className="p-4 mb-2 bg-white rounded-b-lg rounded-t-xl">
                {message}
              </div>
            ) : index === messages.length - 1 ? (
              <div className="flex">
                <div className="w-5/6 xl:w-11/12">
                  <div className="p-4 bg-white rounded-t-lg rounded-b-xl">
                    {message}
                  </div>
                </div>
                <div className="flex justify-between w-1/6 xl:w-1/12 px-2 md:px-3 py-1">
                  <SmileySVG className="w-5 h-5" />
                  <UserSVG className="w-5 h-5" />
                </div>
              </div>
            ) : (
              <div className="p-4 mb-2 bg-white rounded-lg">{message}</div>
            )}
          </Fragment>
        );
      })}
    </div>
  );
};

function App() {
  const [message, setMessage] = useState(
    "Hello Elsa 👋. My name is Jason. What can I do for you today?"
  );

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
            <RecievedMessageCard
              username={eleanorMessage.username}
              messages={eleanorMessage.messages}
            />

            <SenderMessageCard
              username={sentMessage.username}
              messages={sentMessage.messages}
            />

            <RecievedMessageCard
              username={wadeMessage.username}
              messages={wadeMessage.messages}
            />

            <SenderMessageCard
              username={sentMessage.username}
              messages={sentMessage.messages}
            />
          </div>
        </div>

        <div className="p-2 mb-8 bg-gray-100 rounded-xl">
          <div className="xl:hidden">
            <MacrosRow />
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
                <button className="px-3 py-1 text-white bg-primary rounded-md">
                  Resolve
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="hidden xl:flex w-1/4">
        <MacrosCol />
      </div>
    </div>
  );
}

export default App;
