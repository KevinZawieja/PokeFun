import { Button } from "@/components/ui/button";
import React from "react";

export default function Navbar() {
  return (
    <div className="flex justify-around items-center p-4 text-white bg-green-950 ">
      <div className="text-2xl font-bold">PokeFun Deluxe </div>
      <div className="flex justify-around w-1/2">
        <table className="w-full">
          <tr>
            <td>Games</td>
            <td>News</td>
            <td>Community</td>
          </tr>
        </table>
      </div>

      <div>
        <Button className="bg-blue-500 hover:underline">Login</Button>
      </div>
    </div>
  );
}
