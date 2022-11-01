import MainNavigation from "./MainNavigation";
import Footer from "./Footer";
import classes from "./Layout.module.css";

import { useContext } from "react";
import SessionContext from "../../store/session-context";

import AgeConfirm from "./AgeConfirm";

const Layout = (props) => {
  const ctx = useContext(SessionContext);

  return (
    <>
      <div className={!ctx.isLoggedIn ? classes["hidden"] : ""}>
        <MainNavigation />
        <main className={classes.main}>{props.children}</main>
        <Footer />
      </div>

      {!ctx.isLoggedIn && <AgeConfirm />}
    </>
  );
};

export default Layout;
