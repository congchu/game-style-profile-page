import Content from "./components/Content";
import SidebarRight from "./components/SideBarRight";

function App() {
  return (
    <div className="dashboard rounded-3xl shadow-xl flex color-base flex-shrink-0 justify-between">
      <Content />
      {/* <div className="flex-grow" /> */}
      <SidebarRight />
    </div>
  );
}

export default App;
