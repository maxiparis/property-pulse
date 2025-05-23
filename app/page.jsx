import Hero from "@/components/Hero";
import {InfoBoxes} from "@/components/InfoBoxes";
import properties from '@/properties.json'

export default function HomePage() {
  return (
    <>
      <Hero />
      <InfoBoxes />
    </>
  );
}