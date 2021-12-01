import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div
      style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: 'inherit' }}
          >
            Sidebar
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/clients" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Clientes</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/solutions" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Soluciones</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/technologies" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Tecnologías</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/developers" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">
                Empleados
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            ArdevaSolutions
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
