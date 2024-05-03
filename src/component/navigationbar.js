import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { NavContainer, Title, NavItem, Icon, Text } from '../StyledComponents/NavigationStyles';



const NavigationMenu = () => {
  const menuItems = [
    { text: 'Home', link: '/homepageinfo' },
    { text: 'Race Now', link: '/Home' },

  ];

  return (
    <NavContainer>
      <Title>Formula 1</Title>
      {menuItems.map((item, index) => (
        <React.Fragment key={index}>
          {item.link ? (
            <Link to={item.link}>
              <NavItem>
                <Text>{item.text}</Text>
              </NavItem>
            </Link>
          ) : (
            <NavItem>
              <Text>{item.text}</Text>
            </NavItem>
          )}
        </React.Fragment>
      ))}
    </NavContainer>
  );
};

export default NavigationMenu;