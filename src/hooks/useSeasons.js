import { useEffect, useState } from "react"
import axios from 'axios'

export const useSeasons = () => {
    const [seasons, setSeasons] = useState([]);

    useEffect(() => {
        const fetchSeasons = async () => {
            try {
                const response = await axios.get('https://ergast.com/api/f1/seasons.json?limit=100');
                const seasonData = response.data?.MRData?.SeasonTable?.Seasons || [];
                const reversedSeasons = seasonData.reverse();
                const filteredSeasons = reversedSeasons
                    .map(season => season.season)
                    .filter(season => season >= 1996);
                setSeasons(filteredSeasons);
            } catch (error) {
                console.error('Error fetching season data:', error);
            }
        };

        fetchSeasons();

    }, []);

    return {
        seasons
    };
};