import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute() {
    // const isAuthenticated = localStorage.getItem("userToken") && true;
    const isAuthenticated = true;

    return isAuthenticated ? <Outlet /> : <Navigate to = "login"/>;
}

export default ProtectedRoute;