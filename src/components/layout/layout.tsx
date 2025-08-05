import { ReactNode } from "react";
import Footer from "./footer/footer";
import Header from "./header/Header";
import LayoutContactModal from "./header/components/layoutcontactModal/layoutContactModal";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <LayoutContactModal />
      <Footer />
    </>
  );
};

export default Layout;
