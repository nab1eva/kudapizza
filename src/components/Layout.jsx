import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import TopHeader from "./TopHeader";
// import Categories from "./Categories";

const Layout = () => {
  return (
    <Fragment>
      <TopHeader />
      <Header />
      <main style={{ paddingTop: "150px" }}>
        <div className="container">
          {/* <Categories /> */}
          <Outlet />
        </div>
      </main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
