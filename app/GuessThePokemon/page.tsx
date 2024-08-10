import Score from "./components/home/score";
import Search_bar from "./components/home/search_bar";
import Title from "./components/home/title";
import Stats_List from "./components/stats_Box/stats_list";
import Hints from "./components/home/hints";
import { Separator } from "@/components/ui/separator";

export default function GTP() {
  return (
    <div className="w-full h-screen flex flex-col justify-between items-center">
      <div className="w-full h-[5%] flex items-center justify-center bg-gray-200">
        <Title />
      </div>
      <div className="w-full h-[60%] flex flex-col items-center justify-center mt bg-gray-300 space-y-4">
        <Hints />
        <Search_bar />
        <Separator className="my-2 w-[33%] bg-black" />
        <Score />
      </div>
      <div className="w-full h-[40%] flex items-center justify-center bg-gray-400">
        <Stats_List />
      </div>
    </div>
  );
}
