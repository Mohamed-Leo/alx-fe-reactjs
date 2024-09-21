import { useState } from "react";
import fetchAdvancedSearchResults from "../services/githubService";

// "map"

function Search() {
    const [formData , setFormData] = useState({
        username : "",
        location : "",
        minRepos : ""
    });
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    // fetch data------
    const getUserData = async (username , location , minRepos) => {
        try {
            // call the fetchUserData by service----
            const data = await fetchAdvancedSearchResults(username , location , minRepos)
            // set the data to state
            setUserData(data);
            // clear erros----
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


    const handlechange = (e) => {
        const {name , value} = e.target;
        setFormData({...formData , [name] : value})
    }   

    const handleSearch = (e) => {
        e.preventDefault();

        const {username , location , minRepos} = formData;

        // check on empty searches
        if (!username.trim()) return;

        // show loading---
        setLoading(true);
        setError("");

        getUserData(username , location , minRepos);
    };

    return (
        <div className="w-fit mx-auto">
            <form onSubmit={handleSearch} className="flex flex-col gap-4">
                <input
                    className="py-2 px-3 rounded-md"
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handlechange}
                    placeholder="Username"
                />

                <input
                    className="py-2 px-3 rounded-md"
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handlechange}
                    placeholder="Location"
                />

                <input
                    className="py-2 px-3 rounded-md"
                    type="text"
                    name="minRepos"
                    value={formData.minRepos}
                    onChange={handlechange}
                    placeholder="Min repo"
                />
                <button className="bg-blue-700 py-1 px-3 rounded-md" type="submit">
                    Search
                </button>
            </form>

            {loading && <p className="text-center mt-5">Loading...</p>}
            {error && <p className="text-center text-red-700 mt-5">{error}</p>}

            {
                userData.map(user => 
                    <div className="text-center space-y-3 mt-10" key={user.id}>
                        <img
                            className="mx-auto rounded-md"
                            src={user.avatar_url}
                            alt={user.login}
                            width="100"
                        />
                        <h3>{user.login}</h3>
                        {/* <p>{user.bio}</p> */}
                        <a className="mt-5 block text-purple-700 underline" href={user.html_url} target="_blank">
                            Visit GitHub Profile
                        </a>
                    </div>
                )
            }
        </div>
    );
}

export default Search;
