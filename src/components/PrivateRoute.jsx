// // src/components/PrivateRoute.jsx
// import React from 'react';
// import { Navigate, Outlet } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';

// const PrivateRoute = ({ element: Component, ...rest }) => {
//   const { auth } = useAuth();

//   return auth.token ? <Component {...rest} /> : <Navigate to="/login" />;
// };

// export default PrivateRoute;
