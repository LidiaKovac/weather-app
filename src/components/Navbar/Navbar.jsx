import { FullDate } from "../Date/FullDate";
import { Search } from "../Search/Search";
import "./Navbar.css";
export const Navbar = () => {
  return (
    <nav>
      <FullDate />
      <Search/>
    </nav>
  );
};
