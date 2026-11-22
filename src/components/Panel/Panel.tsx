import styles from "./Panel.module.css";
import type { ReactElement, ReactNode } from "react";

type PanelProps = {
  children?: ReactNode;
  title: string;
  description?: string;
  action?: ReactElement;
};

function Panel({ children, title, description, action }: PanelProps) {
  return (
    <section className={styles.panel}>
      <header className={styles.heading}>
        <div className={styles.headingLeft}>
          <h2 className={styles.headingTitle}>{title}</h2>
          {description && (
            <span className={styles.headingDescription}>{description}</span>
          )}
        </div>
        {action}
      </header>
      <div className={styles.content}>{children}</div>
    </section>
  );
}

export default Panel;
