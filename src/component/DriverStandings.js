import React from 'react';
import { DriverStandingsContainer, DriverRow, Flag, Name, Points } from '../StyledComponents/StandingsStyles';

const DriverStandings = ({ driverStandings }) => (
  <DriverStandingsContainer>
    <div style={{ marginBottom: '10px', textAlign: 'center' }}>Driver Standings</div>
    {driverStandings.map((driver, index) => (
      <React.Fragment key={index}>
        <DriverRow>
          <Flag src={driver.imageUrl || `/flags/${driver.Driver.nationality.toLowerCase()}.png`} alt={driver.Driver.nationality} />
          <Name>{`${driver.Driver.givenName} ${driver.Driver.familyName}`}</Name>
          <Points>{driver.points}</Points>
        </DriverRow>
        {index !== driverStandings.length - 1 && <hr style={{ margin: 0 }} />}
      </React.Fragment>
    ))}
  </DriverStandingsContainer>
);

export default DriverStandings;
