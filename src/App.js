import "./App.css";
import Header from "./Header";
import SideBar from "./SideBar";
import Feed from "./Feed";
import Widgets from "./widgets";
import Login from "./Login";
function App() {
  return (
    
    <div className="app">
    {!user ? ( 
      <Login/>
      ) : ( 
        <>
      <Header />
      <div className="app__body">
        <SideBar />
        <Feed />
        <Widgets/>
        </>
      </div>
    
    </div>
      )}
    <
  );
}

export default App;
