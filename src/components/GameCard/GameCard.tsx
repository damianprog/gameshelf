import type { Game } from "../../types/models";
import StatusBadge from "../StatusBadge/StatusBadge";
import styles from "./GameCard.module.css";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

function GameCard({
  thumbnail,
  title,
  platform,
  status,
  dateAdded,
  rating,
}: Game) {
  return (
    <div className={styles.gameCard}>
      <div className={styles.thumbnailContainer}>
        {thumbnail && (
          <img className={styles.thumbnail} src={thumbnail} alt="" />
        )}
      </div>
      <div className={styles.details}>
        <div className={styles.heading}>
          <h3 className={styles.title}>{title}</h3>
          <span className={styles.meta}>
            {platform} &middot; {dateFormatter.format(dateAdded)}
          </span>
        </div>
        <footer className={styles.footer}>
          <StatusBadge status={status} />
          <span className={styles.rating}>
            {rating !== undefined ? `${rating}/10` : "-"}
          </span>
        </footer>
      </div>
    </div>
  );
}

export default GameCard;
