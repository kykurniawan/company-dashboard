import { useState } from "react";
import Activity from "./Components/Activity";
import Bank from "./Components/Bank";
import Location from "./Components/Location";
import Profile from "./Components/Profile";
import Relation from "./Components/Relation";
import Sidenav from "./Components/Sidenav";
import Topmenu from "./Components/Topmenu";

function App() {
  const [open, setOpen] = useState(false)

  const className = open ? "bg-white shadow-lg h-screen sticky top-0" : "bg-white shadow-lg h-screen sticky top-0 hidden"

  const toggleMenu = () => {
    setOpen(!open)
  }

  return (
    <div className="flex">
      <Sidenav className={className} />
      <main className="flex-1 py-5 px-10 bg-green-50">
        <Topmenu toggleMenu={toggleMenu} />
        <div id="content">
          <div className="grid grids-col-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
              <Profile />
            </div>
            <div className="md:col-span-8">
              <Location />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <Bank />
                  <Relation />
                </div>
                <Activity />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
