import "./App.css";
import Button from "./components/Button/Button";
import GameCard from "./components/GameCard/GameCard";
import Layout from "./components/Layout/Layout";
import Panel from "./components/Panel/Panel";
import StatusBadge from "./components/StatusBadge/StatusBadge";

function App() {
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
          <Panel title="Backlog">
            <div className="backlogGamesCards">
              <GameCard
                dateAdded={new Date("2026-11-16")}
                id={1}
                platform="PC"
                status="Playing"
                title="Elden Ring"
                rating={9}
                thumbnail="https://game-sector.s27.cdn-upgates.com/_cache/3/e/3ef99d5312236021e43463ea5640dbd2-el-main.jpeg"
              />
            </div>
          </Panel>
        </div>
      </Layout>
    </>
  );
}

export default App;
