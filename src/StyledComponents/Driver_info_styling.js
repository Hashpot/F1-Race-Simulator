import styled from 'styled-components';


export const DriverInfoContainer = styled.div`
  display: flex;
  align-items: center;
  space-x: 0.5rem;
  group: hover: cursor-default;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.25);  
  }
`;

export const DriverName = styled.span`
  position: fixed;
  right: 6rem;
  width: 10rem;
  padding: 0.5rem 1.25rem;
  background-color: #1e293b;
  color: #fff;
  font-family: "F1", sans-serif;
  border-radius: 0.375rem;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  transform: scale(0);
  transition: all 0.3s ease;

  ${DriverInfoContainer}:hover & {
    transform: scale(1);
  }
`;

export const ConstructorName = styled.h3`
  display: inline-block;
  font-size: 0.75rem;
  color: #cbd5e1;
`;

export const ConstructorColor = styled.div`
  display: inline-block;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  margin-left: 0.5rem;
`;

export const ProfileImage = styled.img`
  display: none;

  @media (min-width: 768px) {
    display: block;
    width: 2.5rem;
    height: 2.5rem;
    object-fit: cover;
    border-radius: 50%;
    border: 2px solid;
  }
`;

export const DriverCode = styled.h1`
  font-family: "F1", sans-serif;
  color: #fff;
  font-weight: 600;
  text-align: left;
  width: 12rem;
  overflow: hidden;
  margin-left: 1rem; 
`;