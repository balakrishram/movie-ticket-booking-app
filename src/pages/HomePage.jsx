import { FeaturedSection } from "../components/FeaturedSection";
import { HeroSection } from "../components/HeroSection";
import { TrailersSection } from "../components/TrailersSection";

export function HomePage(){
  return (
    <>
      <HeroSection/>
      <FeaturedSection/>
      <TrailersSection />
    </>
  )
}