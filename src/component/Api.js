
export const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  };
  
  export const fetchWikipediaImage = async (url) => {
    const pageTitle = url.split('/').pop();
    const imageUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${pageTitle}`;
    try {
      const response = await fetch(imageUrl);
      const data = await response.json();
      return data.thumbnail ? data.thumbnail.source : null;
    } catch (error) {
      console.error('Error fetching Wikipedia image:', error);
      return null;
    }
  };
  
  export const fetchDriverStandings = async (year) => {
    try {
      const response = await fetch(`http://ergast.com/api/f1/${year}/driverStandings.json?limit=20`);
      const data = await response.json();
      return data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    } catch (error) {
      console.error("Error fetching driver standings:", error);
      return [];
    }
  };
  
  export const fetchConstructorStandings = async (year) => {
    try {
      const response = await fetch(`http://ergast.com/api/f1/${year}/constructorStandings.json?limit=20`);
      const data = await response.json();
      return data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
    } catch (error) {
      console.error("Error fetching constructor standings:", error);
      return [];
    }
  };
  

  