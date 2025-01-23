
import { HiBars2 } from "react-icons/hi2";

const Navbar = () => {
  return (
    <nav className="fixed w-full p-8 z-50 flex items-center justify-between">
      <div className="font-emporia">Piyush Chauhan</div>
      <div>
        <HiBars2 fontSize={34} />
      </div>
    </nav>
  );
};

export default Navbar;
