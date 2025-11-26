import { useGSAP } from "@gsap/react";
import { SettingIcon } from "./Icons";
import gsap from "gsap";

const Navbar = () => {
  useGSAP(() => {
    gsap.from(".navbar1", {
      opacity: 0,
      duration: 1,
      y: -100,
    });
    gsap.from(".shape,.navbar2", {
      opacity: 0,
      duration: 0.5,
      delay: 1,
      x: -100,
    });
    gsap.from(".bullets", {
      opacity: 0,
      duration: 1,
      rotate: 360,
    });
    gsap.from(".heroText", {
      opacity: 0,
      duration: 1,
      display: "none",
      x: 100,
      ease: "power1",
    });
  }, []);
  return (
    <nav className="navbar1 fixed w-full p-8 z-50 flex items-center justify-between">
      <div className="font-emporia">Piyush Chauhan</div>
      <div>
        <SettingIcon className="text-4xl hover:rotate-90 cursor-pointer duration-300" />
      </div>
    </nav>
  );
};

export default Navbar;
