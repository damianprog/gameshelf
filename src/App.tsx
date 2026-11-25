import "./App.css";
import Button from "./components/Button/Button";
import Layout from "./components/Layout/Layout";
import Panel from "./components/Panel/Panel";
import StatusBadge from "./components/StatusBadge/StatusBadge";

function App() {
  return (
    <>
      <Layout>
        <Panel
          title="Today's best deals"
          description="by discount"
          action={<Button variant="ghost">Action</Button>}
        >
          Panel children content
        </Panel>
        <Button variant="secondary" size="md">
          Add Game
        </Button>
        <Panel title="Badge statusu">
          <div className="statuses">
            <StatusBadge status="Planned"></StatusBadge>
            <StatusBadge status="Playing"></StatusBadge>
            <StatusBadge status="Finished"></StatusBadge>
            <StatusBadge status="Dropped"></StatusBadge>
          </div>
          <p>
            Mój status to <StatusBadge status="Playing" /> od wczoraj.
          </p>
        </Panel>
      </Layout>
    </>
  );
}

export default App;
