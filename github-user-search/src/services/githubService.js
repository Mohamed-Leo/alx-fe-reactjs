import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com/search/users';

const fetchAdvancedSearchResults = async ( username, location, minRepos ) => {
    
    let query = `q=${username ? `${username} ` : ''}`;
    if (location) query += `location:${location} `;
    if (minRepos) query += `repos:>${minRepos}`;

    const response = await axios.get(`${GITHUB_API_URL}?${query}`);
    return response.data.items;
};

export default fetchAdvancedSearchResults;