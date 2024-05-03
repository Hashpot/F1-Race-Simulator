import React, { useState, useEffect, } from 'react';
import { ConstructorStandingsContainer,DriverStandingsContainer,StandingsContainer,YearSelectorContainer,YearSelector,DriverRow,Name,Points,Flag} from '../StyledComponents/StandingsStyles';
import { fetchDriverStandings, fetchConstructorStandings, fetchWikipediaImage } from '../component/Api';
import DriverStandings from '../component/DriverStandings';
import ConstructorStandings from '../component/ConstructorStandings';


const Formula1Standings = () => {
  const [driverStandings, setDriverStandings] = useState([]);
  const [constructorStandings, setConstructorStandings] = useState([]);
  const [selectedYear, setSelectedYear] = useState(2024);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const driverData = await fetchDriverStandings(selectedYear);
        const constructorData = await fetchConstructorStandings(selectedYear);

        const driverStandingsWithImages = await Promise.all(driverData.map(async (standing) => ({
          ...standing,
          imageUrl: await fetchWikipediaImage(standing.Driver.url) || `/flags/${standing.Driver.nationality.toLowerCase()}.png`
        })));

        const constructorStandingsWithImages = await Promise.all(constructorData.map(async (standing) => ({
          ...standing,
          imageUrl: await fetchWikipediaImage(standing.Constructor.url) || `/flags/${standing.Constructor.nationality.toLowerCase()}.png`
        })));

        setDriverStandings(driverStandingsWithImages);
        setConstructorStandings(constructorStandingsWithImages);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [selectedYear]);

  const handleYearChange = (event) => {
    const year = parseInt(event.target.value);
    setSelectedYear(year);
  };

  const yearOptions = [];
  for (let year = 2023; year >= 1950; year--) {
    yearOptions.push(<option key={year} value={year}>{year}</option>);
  }

  return (
    <div>
      <YearSelectorContainer>
        <YearSelector value={selectedYear} onChange={handleYearChange}>
          {yearOptions}
        </YearSelector>
      </YearSelectorContainer>

      <StandingsContainer>
        <DriverStandings driverStandings={driverStandings} />
        <ConstructorStandings constructorStandings={constructorStandings} />
      </StandingsContainer>
    </div>
  );
};

export default Formula1Standings;  