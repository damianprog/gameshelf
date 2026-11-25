import styles from "./StatusBadge.module.css";
import type { Status } from "../../types/models";

const statuses: Record<Status, string> = {
  Planned: styles.planned,
  Playing: styles.playing,
  Finished: styles.finished,
  Dropped: styles.dropped,
};

type StatusBadgeProps = {
  status: Status;
};

function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span className={`${styles.statusBadge} ${statuses[status]}`}>
      {status}
    </span>
  );
}

export default StatusBadge;
