import About from "./components/About";
import Contact from "./components/Contact";
import EmailSidebar from "./components/EmailSidebar";
import Experiences from "./components/Experiences";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Work from "./components/Work";

export default function Home() {
  return (
    <div className="absolute top-0 z-[-2] h-screen w-screen overflow-x-hidden bg-navy line-height-2 p-0 m-0 text-light-slate antialiased selection:bg-lightest-navy selection:text-green">
      <Navbar />
      <div className="flex">
      <Sidebar />
      <EmailSidebar/>
      <div className="flex-1 ml-[16%]  justify-center">
      <Hero/>
      <About/>
      <Experiences/>
      <Work/>
      <Contact/>
      </div>
    </div>
    </div>
  );
}
