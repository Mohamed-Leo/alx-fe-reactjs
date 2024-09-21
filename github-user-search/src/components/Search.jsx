import { useState } from "react";
import fetchUserData from "../services/githubService";


function Search() {
    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState(null);
    const [loading , setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();

        // check on empty searches
        if (!username.trim()) return;

        // show loading---
        setLoading(true);

        // call the fetchUserData by service----
        const data = fetchUserData(username);
        data.then(res => {
            setUserData(res)
            setLoading(false);
            setError(null);
        })
        .catch(() => {
            setError("Looks like we cant find the user");
            setLoading(false);
            setUserData(null);
        })
    }

    return (
        <div>
            <form onSubmit={handleSearch}>
                <input
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
                placeholder="Enter GitHub username"
                />
                <button type="submit">Search</button>
            </form>

            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}

            {
                userData && (
                    <div>
                        <img src={userData.avatar_url} alt={userData.login} width="100" />
                        <h3>{userData.name}</h3>
                        <p>{userData.bio}</p>
                        <a href={userData.html_url} target="_blank">
                            Visit GitHub Profile
                        </a>
                    </div>
                )
            }
        </div>
    );
}

export default Search;
