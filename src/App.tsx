import React from "react";
import "./css/App.css";
import SmileySVG from "./components/svg/smiley";
import UserSVG from "./components/svg/user";
import MenuSVG from "./components/svg/menu";
import ChevronDownSVG from "./components/svg/chevron-down";
import PinSVG from "./components/svg/pin";
import { PlusIcon } from "@heroicons/react/solid";

function App() {
  return (
    <div className="min-h-screen p-4 bg-white">
      <main className="">
        <div className="mb-8 bg-gray-100 rounded-xl">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="font-bold text-gray-400">In progress</div>
            <div className="flex items-center">
              <MenuSVG className="w-5 h-5" />
            </div>
          </div>
          <hr className="border" />

          <div className="p-4">
            <div className="mb-8">
              <div className="mb-1 text-sm">Eleanor Pena</div>

              <div className="p-4 mb-2 bg-white rounded-b-lg rounded-t-xl">
                Immersive chat startups have a very different vision for the
                future of voice
              </div>

              <div className="flex">
                <div className="w-5/6">
                  <div className="p-4 bg-white rounded-t-lg rounded-b-xl">
                    What to Watch on Wednesday: Peacock finally hatches with
                    Brave New World, Psych 2, and more
                  </div>
                </div>
                <div className="flex justify-between w-1/6 px-3 py-1">
                  <SmileySVG className="w-5 h-5" />
                  <UserSVG className="w-5 h-5" />
                </div>
              </div>
            </div>

            <div className="flex mb-8">
              <div className="w-11/12 text-right">
                <div className="mb-1 text-sm">Guy Hawkins — Cartloop</div>
                <div className="p-4 mb-2 text-white rounded-b-lg rounded-t-xl bg-primary">
                  Why Netflix shares are down 10%
                </div>
                <div className="p-4 text-white rounded-t-lg rounded-b-xl bg-primary">
                  Ted Sarandos named co-CEO at Netflix
                </div>
              </div>
              <div className="flex flex-col items-center justify-end w-1/12">
                <SmileySVG className="w-5 h-5 p-1 text-white rounded-full bg-primary" />
              </div>
            </div>

            <div className="mb-8">
              <div className="mb-1 text-sm">Wade Warren</div>

              <div className="p-4 mb-2 bg-white rounded-b-lg rounded-t-xl">
                The Calm meditation app is getting its own celebrity-filled HBO
                Max show
              </div>

              <div className="flex">
                <div className="w-5/6">
                  <div className="p-4 bg-white rounded-t-lg rounded-b-xl">
                    Apple opens another megastore in China amid William Barr
                    criticism
                  </div>
                </div>
                <div className="flex justify-between w-1/6 px-3 py-1">
                  <SmileySVG className="w-5 h-5" />
                  <UserSVG className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-2 mb-8 bg-gray-100 rounded-xl">
          <div className="px-3 py-4 mb-4 bg-white rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-4">
              <div className="font-bold">Macros</div>
              <div>
                <ChevronDownSVG className="w-5 h-5" />
              </div>
            </div>

            {/* <div className="flex flex-no-wrap justify-between overflow-x-scroll md:flex-wrap md:overflow-x-hidden"> */}
            <div className="flex flex-no-wrap justify-between overflow-x-scroll pt-1 pb-4">
              <div className="min-w-3/4 p-4 bg-gray-100 rounded-lg mr-4 border-4 border-transparent border-solid hover:border-primary">
                Immersive chat startups have a very different vision for the
                future of voice
              </div>

              <div className="min-w-3/4 p-4 bg-gray-100 rounded-md mr-4">
                Hello <b>%user%</b>👋. My name is <b>%expert%</b>. What can I do
                for you today?
              </div>

              <div className="min-w-3/4 p-4 bg-gray-100 rounded-md mr-4">
                Apple opens another megastore in China amid William Barr
                criticism
              </div>
            </div>
          </div>

          <div className="px-6 py-4 bg-white rounded-lg shadow-md">
            <div className="mb-4">
              Hello <b>Elsa</b> 👋. My name is <b>Jason</b>. What can I do for
              you today?
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
    </div>
  );
}

export default App;
