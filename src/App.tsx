import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
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
import { sendMessageToApi } from "./api";
import {
  notifyError,
  notifyRecievedMessage,
  notifySentMessage,
  notifySuccess,
} from "./notifications";

const socket = new WebSocket(
  `${process.env.REACT_APP_WS_ENDPOINT}ws/conversations/10/`
);

// const dummyMessages = [
//   {
//     type: "in",
//     username: "Eleanor Pena",
//     messages: [
//       "Immersive chat startups have a very different vision for the future of voice",
//       "What to Watch on Wednesday: Peacock finally hatches with Brave New World, Psych 2, and more",
//     ],
//   },
//   {
//     type: "out",
//     username: "Guy Hawkins — Cartloop",
//     messages: [
//       "Why Netflix shares are down 10%",
//       // "Ted Sarandos named co-CEO at Netflix",
//     ],
//   },
//   // {
//   //   type: "in",
//   //   username: "Wade Warren",
//   //   messages: [
//   //     "The Calm meditation app is getting its own celebrity-filled HBO Max show",
//   //     "Apple opens another megastore in China amid William Barr criticism",
//   //   ],
//   // },
// ];

type MessageType = {
  type: "in" | "out";
  username: string;
  messages: string[];
};

function App() {
  const [message, setMessage] = useState("");
  const [uid, setUID] = useState("");
  const [lastMessage, setLastMessage] = useState<MessageType | null>(null);
  const [messages, setMessages] = useState<MessageType[]>([]);

  const useMacro = (macro: string) => {
    setMessage(macro);
  };

  if (socket) {
    socket.onmessage = function (e) {
      const data = JSON.parse(e.data);
      const { message, uid: senderUID } = data;

      const newMessage: MessageType = {
        type: "in",
        username: `User ${senderUID}`,
        messages: [message],
      };

      if (uid === senderUID) {
        newMessage.type = "out";
        setMessages([...messages, newMessage]);
      } else {
        notifyRecievedMessage("New message");
        newMessage.type = "in";
        setMessages([...messages, newMessage]);
      }

      setLastMessage(newMessage);
    };
  }

  socket.onclose = function () {
    notifyError("Chat socket closed unexpectedly");
  };

  socket.onopen = () => {
    notifySuccess("Connected to Websocket!");
  };

  const sendMessage = async () => {
    if (message) {
      notifySentMessage("Message sent");
      socket.send(JSON.stringify({ message, uid }));
      setMessage("");
    }
  };

  useEffect(() => {
    // Generate uid to identify user
    setUID(`id-${Math.random().toString(16).slice(2)}`);
  }, []);

  return (
    <div className="min-h-screen p-4 bg-white flex">
      <main className="w-full xl:w-3/4 h-screen">
        <div className="mb-8 bg-cl-gray rounded-xl overflow-y-scroll h-70vh">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="font-semibold text-cl-dark-gray text-sm">
              In progress
            </div>
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

        <div className="p-2 mb-8 bg-cl-gray rounded-xl">
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
                <button
                  onClick={() => sendMessage()}
                  className="bg-primary rounded-full w-8 h-8 flex justify-center items-center cursor-pointer"
                >
                  <PlusIcon className="h-5 w-5 text-white" />
                </button>
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
      <Toaster />
    </div>
  );
}

export default App;
