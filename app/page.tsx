import Image from "next/image";
import Sidebar from "./components/sidebar";
import Navigation from "./components/navigation";

export default function Home() {
  return (
    <div className="w-screen flex flex-row h-screen border border-red-500 relative">
        <Sidebar />
        <div className="w-[88%] h-screen bg-background">
          <Navigation />
        </div>
    </div>
  );
}
