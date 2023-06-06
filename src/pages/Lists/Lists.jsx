import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import '../../App.css'
import { Link, useLocation } from 'react-router-dom';
import { SidebarData } from '../../Data/Data';
import Table from '../../components/Table/Table'
import './lists.css'

const Lists = ( titles ) => {
  const location = useLocation();
  const [title, setTitle] = useState("");

  useEffect(() => {
    const getTitle = () => {
      const currentPath = location.pathname;
      const menuItem = SidebarData.find((item) => item.url === currentPath);
      if (menuItem) {
        setTitle(capitalizeFirstLetter(menuItem.heading));
      } else {
        setTitle("");
      }
    };

    getTitle();
  }, [location]);

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div className='AppGlass'>
      <Sidebar />
      <div className="List">
        <h1>{title}</h1>
        <div className="container">
          <Link to={`${location.pathname}/new`} style={{ textDecoration: 'none' }}><button>Add<span></span></button></Link>
        </div>
        <Table />
      </div>
    </div>
  )
};

export default Lists