import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import AboutMe from "@/components/Aboutme";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Intro/>
      <AboutMe/>
      <Skills/>
    </div>
  );
}
