import cartloopImage from "../assets/cartloop.png";
import SmileySVG from "./svg/smiley";
import UserSVG from "./svg/user";
import React, { Fragment } from "react";

type OutBoundMessageType = {
  username: string;
  messages: string[];
};

type InBoundMessageType = {
  username: string;
  messages: string[];
};

export const OutBoundMessageCard: React.FC<OutBoundMessageType> = ({
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

export const InBoundMessageCard: React.FC<InBoundMessageType> = ({
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
