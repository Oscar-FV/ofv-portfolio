import NavItem from "./NavItem";
import { navItems } from "../../consts/NavBar.constants";
import useNavHook from "./Hooks/NavHook";

const NavBar = () => {

  useNavHook();

  return (
    <nav className="pl-10">
      <ul className="flex gap-3 font-body">
        {navItems.map((navItem) => (
          <NavItem name={navItem.name} key={navItem.name} route={navItem.route} />
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
