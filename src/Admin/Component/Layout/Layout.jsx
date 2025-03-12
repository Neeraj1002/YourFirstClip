import React,{useState} from 'react';
import Sidebar from './Sidebar';
import LoggedInUserProfile from '../Auth/LogggedInUser';
import { Outlet } from 'react-router-dom';

const Toggle = ({ toggle,activeSidebar }) => {
  return (
      <div  className={`cursor-pointer p-4 transform transition-all duration-300 ${
        activeSidebar ? "rotate-180" : ""
      }`}
      onClick={toggle}
    >
        <span className="block bg-white h-1 w-8 my-1 rounded-lg"></span>
        <span className="block bg-white h-1 w-8 my-1 rounded-lg"></span>
        <span className="block bg-white h-1 w-8 my-1 rounded-lg"></span>
      </div>

  );
};

const Layout = () => {


  const [activeSidebar, setActiveSidebar] = useState(false);
  const toggle = () => setActiveSidebar(val => !val);
  
  return (
    <div className="flex h-screen">
      <Sidebar activeSidebar={activeSidebar} />
      <div className="flex flex-col flex-1">
        <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
          <Toggle toggle={toggle} activeSidebar={activeSidebar}/>
          <LoggedInUserProfile />
        </header>
        <main className="flex-1 h-screen p-6 bg-gray-100">
          {/* This is where the child component for each route will be rendered */}
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
