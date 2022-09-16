import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <main>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </main>
  );
};

export default Layout;
