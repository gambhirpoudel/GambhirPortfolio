import About from "./components/About";
import Contact from "./components/Contact";
import Experiences from "./components/Experiences";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Work from "./components/Work";

export default function Home() {
  return (
    <div className="absolute top-0 z-[-2] h-screen w-screen mx-auto overflow-x-hidden bg-navy line-height-2 p-0 m-0 text-light-slate antialiased selection:bg-lightest-navy selection:text-green">
      <Navbar />
      <div className="flex">
      <Sidebar />
      <div className="flex-1 lg:ml-[16%] p-5  justify-center">
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
