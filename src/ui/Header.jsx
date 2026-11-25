import { Link } from "react-router-dom";
import SearchOrder from "./SearchOrder";
import Username from "../features/user/Username";
function Header() {
  return (
    <header className="flex text-red-700 items-center justify-between border-b border-stone-200 bg-yellow-400 px-4 py-3 uppercase sm:px-6">
      <Link className="tracking-widest" to="/">
        Pizza Order co. hello friendss .......!!!!  hello hiii team vgr benny surya pradeep nirmal ganga
      </Link>
      <SearchOrder></SearchOrder>
      <Username></Username>
    </header>
  );
}

export default Header;
