import { Hero } from "@/components/Hero";
import { Leistungen } from "@/components/Leistungen";
import { HonorarKosten } from "@/components/HonorarKosten";
import { Team } from "@/components/Team";
import { KontaktAnfahrt } from "@/components/KontaktAnfahrt";

export default function Home() {
  return (
    <>
      <Hero />
      {/* Rest der Seite: Herz immer im Hintergrund, aber stark abgeschwächt */}
      <div className="relative z-10 min-h-full bg-white/92">
        <Leistungen />
        <HonorarKosten />
        <Team />
        <KontaktAnfahrt />
      </div>
    </>
  );
}
