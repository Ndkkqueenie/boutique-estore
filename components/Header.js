import Link from "next/link";

import CartSummary from "./CartSummary";

import LogoSVG from "../svg/logo.svg";
import HomeSVG from "../svg/home.svg";

function Header() {
  return (
    <header className="md:absolute md:left-0 md:top-0 w-full z-10">
      <div className="py-3 lg:py-5 flex items-center">
        <Link href="/" title="Return to Glam Home">
          <HomeSVG className="w-full" />
        </Link>
        <span className="pr-1"></span>
        <CartSummary />
      </div>

      <Link href="/" title="Return to Glam Home">

        <LogoSVG className="w-full" />

      </Link>
    </header>
  );
}

export default Header;
