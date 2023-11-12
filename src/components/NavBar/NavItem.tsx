import { Link } from "react-router-dom";

export interface NavItemProps {
  name: string,
  route: string
}

const NavItem = ({ name, route }: NavItemProps) => {

  return (
    <li id={route} className="text-accent-900 transition ease-in duration-200 hover:bg-accent-50 hover:text-primary-900 rounded-md py-1 px-2">
      <Link to={route} >{name}</Link>
    </li>
  );
};

export default NavItem;
