import MainNavigation from "./MainNavigation";
import Footer from "./Footer";
import classes from "./Layout.module.css";

import { useContext } from "react";
import SessionContext from "../../store/session-context";

import AgeConfirm from "./AgeConfirm";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Layout = (props) => {
  const ctx = useContext(SessionContext);
  const router = useRouter();

  console.log(ctx);

  if (ctx.isLoggedIn === true) {
    console.log("LOGEADO!");
  }

  // useEffect(() => {
  //   if (!ctx.isLoggedIn) {
  //     router.push("/confirm_age");
  //   }
  // }, [ctx.isLoggedIn]);

  return (
    <>
      {ctx.isLoggedIn && (
        <>
          <MainNavigation />
          <main className={classes.main}>{props.children}</main>
          <Footer />
        </>
      )}

      {!ctx.isLoggedIn && <AgeConfirm />}
    </>
  );
};

export default Layout;
