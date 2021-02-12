import { Header } from "../Header/Header";
import { GlobalStyles } from "../styles/GlobalStyles";
import { PageStyled } from "./styled";

export const Page = ({ children }) => {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <PageStyled>
        {children}
      </PageStyled>
    </div>
  );
};
