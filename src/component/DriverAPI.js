import axios from "axios";

const WIKI_API_URL = "https://en.wikipedia.org/w/api.php";
const ERGAST_API_BASE_URL = "https://ergast.com/api/f1";

export const fetchDriverImage = async (driverUrl) => {
  try {
    const wikiId = driverUrl.split("/").pop();
    const response = await axios.get(`${WIKI_API_URL}?&origin=*&action=query&titles=${wikiId}&prop=pageimages&format=json&pithumbsize=100`);
    const pageID = Object.keys(response.data.query.pages)[0];
    return response.data.query.pages[pageID].thumbnail.source;
  } catch (error) {
    throw new Error('Error fetching driver image.');
  }
};

export const fetchConstructorInfo = async (year, race, driverId) => {
  try {
    const response = await axios.get(`${ERGAST_API_BASE_URL}/${year}/${race}/drivers/${driverId}/constructors.json`);
    return response.data.MRData.ConstructorTable.Constructors[0];
  } catch (error) {
    throw new Error('Error fetching constructor info.');
  }
};