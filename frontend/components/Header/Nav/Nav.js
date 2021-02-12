import Link from "next/link";
import NavStyled from "../../styles/NavStyles";

export const Nav = () => {
  return (
    <NavStyled>
      <Link href="/products">Products</Link>
      <Link href="/sell">Sell</Link>
      <Link href="/orders">Orders</Link>
      <Link href="/account">Account</Link>
    </NavStyled>
  );
}