import "./App.css";
import Button from "./components/Button/Button";
import Layout from "./components/Layout/Layout";
import Panel from "./components/Panel/Panel";

function App() {
  return (
    <>
      <Layout>
        <Panel
          title="Today's best deals"
          description="by discount"
          action={<button>Click Me!</button>}
        >
          Panel children content
        </Panel>
        <Button variant="primary" size="lg">
          Add Game
        </Button>
      </Layout>
    </>
  );
}

export default App;
