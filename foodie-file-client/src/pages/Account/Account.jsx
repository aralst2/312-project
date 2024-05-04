import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests
import './Account.css'; // Import the CSS file

const Account = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:4500/auth'); // Fetch user data from the /auth endpoint
        setUserData(response.data); // Assuming response.data contains the user data
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []); // Run once on component mount

  return (
    <div className="page">
      <h1>Account</h1>
      <div className="account-container">
        {userData ? (
          <>
            <h3>Username: {userData.username}</h3>
            <h3>Email: {userData.email}</h3>
            {/* Avoid displaying the password */}
            {/* <h3>Password: {userData.password}</h3> */}
          </>
        ) : (
          <p>Loading user data...</p>
        )}
        <button>Sign out</button>
      </div>
    </div>
  );
};

export default Account;
