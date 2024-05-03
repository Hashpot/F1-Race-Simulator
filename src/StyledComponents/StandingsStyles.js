import styled from 'styled-components';

export const ConstructorStandingsContainer = styled.div`
  background-color: #1E2041;
  color: white;
  display: inline-block;
  padding: 10px;
  border-radius: 8px;
  margin-top: 20px;
  margin-right: 5rem;
  width: 40%;
  height: 34rem;
`;

export const DriverStandingsContainer = styled.div`
  background-color: #1E2041;
  color: white;
  display: inline-block;
  padding: 10px;
  border-radius: 8px;
  margin-top: 20px;
  margin-left: 3rem;
  width: 45%;
`;

export const StandingsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const YearSelectorContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
`;

export const YearSelector = styled.select`
  font-size: 16px;
`;

export const DriverRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  margin-bottom: 9.5px;
  padding-left: 10px;
`;

export const Name = styled.div`
  flex-grow: 1;
  margin-right: 10px;
`;

export const Points = styled.div`
  width: 60px;
  text-align: right;
  margin-right: 10px;
`;

export const Flag = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  object-fit: cover;
`;