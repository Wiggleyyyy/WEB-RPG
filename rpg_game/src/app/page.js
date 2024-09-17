import Image from "next/image";
import { Navigation } from "@/components/navigation";

export default function Home() {
  return (
    <main className="bg-zinc-800 w-[100dvw] h-[100dvh] ">
      <Navigation />
    </main>
  );
}
