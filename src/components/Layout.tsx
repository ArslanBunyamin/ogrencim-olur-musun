import React, { ReactElement } from "react";
import Navbar from "./Navbar";

type Props = {
  children: ReactElement;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <main className="pt-16">{children}</main>
    </>
  );
};

export default Layout;
