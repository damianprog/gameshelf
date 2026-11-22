import "./App.css";
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
      </Layout>
    </>
  );
}

export default App;
