import { ConfigProvider, theme } from "antd";
import "./App.css";
import Home from "./interfaces/pages/Home";

function App() {
  const { darkAlgorithm } = theme;
  return (
    <>
      <ConfigProvider theme={{ algorithm: darkAlgorithm }}>
        <Home />
      </ConfigProvider>
    </>
  );
}

export default App;
