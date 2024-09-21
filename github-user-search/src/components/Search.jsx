import { useState } from "react";
import fetchUserData from "../services/githubService";

// "map"

function Search() {
    const [username, setUsername] = useState("");
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    // fetch data------
    const getUserData = async () => {
        try {
            // call the fetchUserData by service----
            const data = await fetchUserData(username)
            // set the data to state
            setUserData(data);
            // clear erros----
            console.log(userData);
            setError(null);
            
        }
        catch {
            setError("Looks like we cant find the user");
            // clear data---
            setUserData(null);
        }
        finally {
            setLoading(false);
        }
    }

    const handleSearch = (e) => {
        e.preventDefault();

        // check on empty searches
        if (!username.trim()) return;

        // show loading---
        setLoading(true);
        setError("");

        getUserData();
    };

    return (
        <div className="w-fit mx-auto">
            <form onSubmit={handleSearch} className="space-x-4 text-center">
                <input
                    className="py-2 px-3 rounded-md"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter GitHub username"
                />
                <button className="bg-blue-700 py-1 px-3 rounded-md" type="submit">
                    Search
                </button>
            </form>

            {loading && <p className="text-center mt-5">Loading...</p>}
            {error && <p className="text-center text-red-700 mt-5">{error}</p>}

            {userData && (
                <div className="text-center space-y-3 mt-10">
                    <img
                        className="mx-auto rounded-md"
                        src={userData.avatar_url}
                        alt={userData.login}
                        width="100"
                    />
                    <h3>{userData.name}</h3>
                    <p>{userData.bio}</p>
                    <a className="mt-5 block text-purple-700 underline" href={userData.html_url} target="_blank">
                        Visit GitHub Profile
                    </a>
                </div>
            )}
        </div>
    );
}

export default Search;
