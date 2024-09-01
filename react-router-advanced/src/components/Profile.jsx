import React from 'react'
import { Link, Route, Routes } from 'react-router-dom';

function Profile() {
    return (
        <div>
            <h2>Profile</h2>
            <nav>
                <Link style={{marginRight : "15px"}} to="details">Profile Details</Link>
                <Link to="settings">Profile Settings</Link>
            </nav>
            <Routes>
                <Route path="details" element={<ProfileDetails />} />
                <Route path="settings" element={<ProfileSettings />} />
            </Routes>
        </div>
    )
}



const ProfileDetails = () => <div>ProfileDetails </div>;
const ProfileSettings = () => <div>ProfileSettings </div>;

export default Profile