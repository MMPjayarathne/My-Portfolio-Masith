import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import AboutMe from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/Contactme";
import Blogs from "@/components/Blogs";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Volunteer from "@/components/Volunteer";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Intro/>
      <AboutMe/>
      <Experience/>
      <Volunteer/>
      <Skills/>
      <Projects/>
      <ContactMe/>
      <Blogs/>
      <Footer/>

    </div>
  );
}
