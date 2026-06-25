import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Review from "./components/Review";

export default function Home() {
  return (
    <div className=" ">
      <HeroSection />
      <Review/>
    </div>
  );
}
