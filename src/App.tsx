import { useState } from "react";
import { Header, SideBar } from "./_lib/components";
import { AppContext } from "./_lib/context/app.context";
import { StudentsRoutesList } from "./_lib/routes-json/student";
import "./App.scss";
/**
 * Main Comonent
 */
function App() {
  const [toggle, setToggle] = useState(false);

  const toggleSideBar = () => {
    setToggle(prev => !prev);
  }
  return (
    <>
    
      <AppContext.Provider value={{toggle, toggleSideBar}}>
        <Header />
        <SideBar routesData={StudentsRoutesList} />
      </AppContext.Provider>
    </>
  );
}

export default App;
