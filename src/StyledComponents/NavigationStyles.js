import styled from 'styled-components';

export const NavContainer = styled.div`
  background-color: #1c1e3e;
  color: #fff;
  width: 200px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  color: #ff4500;
`;

export const NavItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

export const Text = styled.span`
  font-size: 16px;
`;
