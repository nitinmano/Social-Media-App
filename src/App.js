import "./App.css";
import Header from "./Header";
import Sidebar from "./sidebar";
import Feed from "./Feed";
function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {/* App body */}
      <div className="app__body">
        {/* Sidebar */}
        <Sidebar />
        {/* feed */}
        <Feed />
      </div>
    </div>
  );
}

export default App;
