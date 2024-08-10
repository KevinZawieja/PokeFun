import Herosection from "./components/herosection/herosection";
import Navbar from "./components/navbar/navbar";

export default function Home() {
  return (
    <div className=" h-screen w-screen flex flex-col bg-">
      <Navbar />
      <Herosection />
    </div>
  );
}
