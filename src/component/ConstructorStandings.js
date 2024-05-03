import React from 'react';
import { ConstructorStandingsContainer, DriverRow, Flag, Name, Points } from '../StyledComponents/StandingsStyles';

const ConstructorStandings = ({ constructorStandings }) => (
  <ConstructorStandingsContainer>
    <div style={{ marginBottom: '10px', textAlign: 'center' }}>Constructor Standings</div>
    {constructorStandings.map((constructor, index) => (
      <React.Fragment key={index}>
        <DriverRow>
          <Flag src={constructor.imageUrl || `/flags/${constructor.Constructor.nationality.toLowerCase()}.png`} alt={constructor.Constructor.nationality} />
          <Name>{constructor.Constructor.name}</Name>
          <Points>{constructor.points}</Points>
        </DriverRow>
        {index !== constructorStandings.length - 1 && <hr style={{ margin: 0 }} />}
      </React.Fragment>
    ))}
  </ConstructorStandingsContainer>
);

export default ConstructorStandings;
