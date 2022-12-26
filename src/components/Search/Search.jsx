import "./Search.css";
import {RiSearch2Line} from "react-icons/ri"
export const Search = () => {
  return <div className="search__input-wrap">
    <RiSearch2Line/>
    <input type="text" placeholder="Search location here" />
  </div>;
};
