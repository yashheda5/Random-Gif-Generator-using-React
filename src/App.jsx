import { Random } from "./components/Random";
import { Tag } from "./components/Tag";

export default function App() {
  return (
    <div className="w-full h-screen flex relative flex-col background overflow-x-hidden items-center">
      <h1 className="bg-white rounded-lg text-center mt-[40px] w-11/12 font-bold px-10 py-2 text-4xl">
        Random Gifs
      </h1>
      <div className="flex w-full items-center flex-col gap-y-10 mt-[30px]">
        <Random />
        <Tag />
      </div>
    </div>
  );
}
