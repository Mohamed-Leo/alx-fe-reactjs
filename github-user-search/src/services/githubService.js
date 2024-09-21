import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com/search/users?q=';

const fetchAdvancedSearchResults = async ( username, location, minRepos ) => {
    let query = `${username} ${location ? `location:${location}` : ""} ${location ? `repos:>${minRepos}` : ""}`;

    const response = await axios.get(`${GITHUB_API_URL}${query}`);
    return response.data.items;
};

export default fetchAdvancedSearchResults;