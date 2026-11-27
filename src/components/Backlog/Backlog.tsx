import styles from "./Backlog.module.css";
import type { Game } from "../../types/models";
import GameCard from "../GameCard/GameCard";
import Panel from "../Panel/Panel";

type BacklogProps = {
  games: Game[];
};

function Backlog({ games }: BacklogProps) {
  return (
    <Panel title="Backlog">
      <div className={styles.gamesCards}>
        {games.map((game) => (
          <GameCard key={game.id} {...game} />
        ))}
      </div>
    </Panel>
  );
}

export default Backlog;
