import DriverInfo from "../component/DriverInfo"
import RaceBar from "../component/RaceBar"
import Emitter from "../context/Emitter"
import { GridContainer, Title, Subtitle, DriversContainer, DriverWrapper} from '../StyledComponents/GridStyles';

function DriversGrid({ actualLap, allDriversInfo, race, positions, laps, drivers }) {
    const searchDriver = (id) => {
        return allDriversInfo.find(driver => driver.driverId === id)
    }

    drivers = drivers.map(driver => {
        const actualPosition = positions[driver.driverId] || driver.position;
        return { ...driver, position: actualPosition };
    });

    drivers.sort((a, b) => a.position - b.position);

    return (
        <GridContainer>
            <Title>{race.season} {race.raceName?.toUpperCase()}</Title>
            <Subtitle>Lap {actualLap} / {laps.length}</Subtitle>

            <DriversContainer>
                <div>
                    {allDriversInfo.length ? (
                        drivers.map(driver =>
                            <DriverWrapper key={`${race.season}${race.raceName}${driver.driverId}`}>
                                <Emitter>
                                    <DriverInfo driver={searchDriver(driver.driverId)} />
                                    <RaceBar position={driver.position} actualLap={actualLap} laps={laps.length} />
                                </Emitter>
                            </DriverWrapper>
                        )
                    ) : <div></div>}
                </div>
                <div style={{ height: `calc(2.5rem * ${drivers.length})` }}>
                    
                </div>
            </DriversContainer>
        </GridContainer>
    );
}


export default DriversGrid
