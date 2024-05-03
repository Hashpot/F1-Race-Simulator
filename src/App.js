import Home from "./pages/Home";
import View from "./pages/View";

import React from 'react';
import NavigationMenu from "./component/navigationbar";
import DriverStandings from "./pages/homepageinfo";
import styled from 'styled-components';
import { Routes, Route, Outlet } from 'react-router-dom';

const AppContainer = styled.div`
  display: flex; 
  height: 100vh; 
  background-color: #171730;
`;

const ContentContainer = styled.div`
  flex-grow: 1; 
  overflow: auto; 
`;


const MainLayout = () => {
  return (
    <AppContainer>
      <NavigationMenu />
      <ContentContainer>
        <Outlet />
      </ContentContainer>
    </AppContainer>
  );
};


function App() {
  return (
     <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<DriverStandings />} /> 
        <Route path="Home" element={<Home />} /> 
        <Route path="homepageinfo" element={<DriverStandings />} />
        <Route path="View" element={<View />} /> 
        
      </Route>
     
    </Routes>
  );
}

export default App;
