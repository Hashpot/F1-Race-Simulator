
import { useNavigate, useSearchParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from 'axios'

export const useRaceInfo = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [race, setRace] = useState({});
    const [positions, setPositions] = useState({});
    const [allDriversInfo, setAllDriversInfo] = useState([]);
    const [drivers, setDrivers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchRaceData = async () => {
            try {
                const raceResponse = await axios.get(`https://ergast.com/api/f1/${searchParams.get('year')}/${searchParams.get('race')}/laps.json?limit=11000`);
                const raceData = raceResponse.data.MRData.RaceTable.Races[0];

                if (raceData) {
                    setRace(raceData);
                    const raceDrivers = raceData.Laps[0].Timings;
                    setDrivers(raceDrivers);

                    const positionData = {};
                    raceDrivers.forEach(driver => {
                        positionData[driver.driverId] = Number(driver.position);
                    });
                    setPositions(positionData);
                } else {
                    navigate('/error', { replace: true });
                }

                const driverResponse = await axios.get(`https://ergast.com/api/f1/${searchParams.get('year')}/${searchParams.get('race')}/drivers.json`);
                const driverInfo = driverResponse.data.MRData.DriverTable.Drivers;
                setAllDriversInfo(driverInfo);
            } catch (error) {
                console.error('Error fetching race data:', error);
            }
        };

        if (searchParams) {
            fetchRaceData();
        }

    }, [searchParams, navigate]);

    return {
        race,
        positions,
        setPositions,
        allDriversInfo,
        drivers
    };
};