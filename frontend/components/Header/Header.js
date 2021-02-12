import Link from "next/link";
import { Nav } from "./Nav/Nav";
import { HeaderStyled, Logo } from "./styled";
 
export const Header = () => {
  return (
    <HeaderStyled>
      <div className="bar">
        <Logo>
          <Link href="/">Sick fits</Link>
        </Logo>
        <Nav />
      </div>
      <div className="sub-bar">
        <p>Search</p>
      </div>
    </HeaderStyled>
  );
};
