import { ReactNode } from "react";
import Footer from "./footer/footer";
import Header from "./header/Header";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
