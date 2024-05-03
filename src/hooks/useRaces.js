import { useEffect, useState } from "react"
import axios from 'axios'



export const useRaces = (yearSelected) => {
    const [circuits, setCircuits] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (yearSelected) {
                    const response = await axios.get(`https://ergast.com/api/f1/${yearSelected}.json`);
                    const raceData = response.data?.MRData?.RaceTable?.Races || [];
                    setCircuits(raceData);
                }
            } catch (error) {
                console.error('Error fetching circuit data:', error);
            }
        };

        fetchData();

    }, [yearSelected]);

    return {
        circuits
    };
};