import { HighLights } from "../../components/Highlights";
import Slide from "../../components/Slide";
import { Contact } from "./Contact";

export function Home() {
  return (
    <>
      <Contact />
      <main>
        <Slide />
        <HighLights />
      </main>
    </>
  );
}
