import { useState } from "react";
import "./App.css";
import Backlog from "./components/Backlog/Backlog";
import Button from "./components/Button/Button";
import Layout from "./components/Layout/Layout";
import Panel from "./components/Panel/Panel";
import StatusBadge from "./components/StatusBadge/StatusBadge";
import gamesData from "./temporaryData/games";

function App() {
  const [games, setGames] = useState(gamesData);

  return (
    <>
      <Layout>
        <div className="container">
          <Panel
            title="Today's best deals"
            description="by discount"
            action={<Button variant="ghost">Action</Button>}
          >
            Panel children content
          </Panel>
          <Button className="addGameButton" variant="secondary" size="md">
            Add Game
          </Button>
          <Panel title="Badge statusu">
            <div className="statuses">
              <StatusBadge status="Planned"></StatusBadge>
              <StatusBadge status="Playing"></StatusBadge>
              <StatusBadge status="Finished"></StatusBadge>
              <StatusBadge status="Dropped"></StatusBadge>
            </div>
          </Panel>
          <Backlog games={games} />
        </div>
      </Layout>
    </>
  );
}

export default App;
