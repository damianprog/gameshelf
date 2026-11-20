import styles from "./Layout.module.css";
import type { ReactNode } from "react";

type LayoutProps = {
  children?: ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <>
      <header>
        <h1 className={styles.heading}>
          <span className={styles.headingLogo} aria-hidden></span>
          GameShelf
        </h1>
      </header>
      {children}
    </>
  );
}

export default Layout;
