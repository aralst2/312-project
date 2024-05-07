import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests
import './Account.css'; // Import the CSS file
import { useNavigate } from "react-router-dom";

const isEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};

// Not being used currently
function checkCookie() {
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith("token=")) {
      return true; // Cookie found
    }
  }
  return false;
}

const Account = () => {
  const [userData, setUserData] = useState(null);
  const [newUsername, setNewUsername] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');


  const navigate = useNavigate(); // Move this line inside the component

  const fetchUserData = async () => {
    try {
      const response = await axios.get('http://localhost:4500/account');
      setUserData(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const handleUpdate = async () => {
    try{
      const updatedUserData = {};
      console.log("This is current user data: ", userData);
      

      // This sends data to backend, if there is data
      if (newUsername) updatedUserData.newUsername = newUsername;
      if (newEmail) updatedUserData.newEmail = newEmail;
      if (currentPassword) updatedUserData.currentPassword = currentPassword;
      if (newPassword) updatedUserData.newPassword = newPassword;

      

      console.log(isEmpty(updatedUserData));
      if (!isEmpty(updatedUserData)){
        updatedUserData.userId = userData._id;
        const response = await axios.put('http://localhost:4500/account', updatedUserData);
        console.log("Response: ", response);
        localStorage.removeItem('token');
        navigate("/");
      }else{
        console.log("No update to User information");
      }
      
    } catch (error){
      console.log("There is an error: ", error);
    }
    
  };

  // GET request, fetch user data
  useEffect(() => {
    fetchUserData();
  }, []);  
  
  // Sign out
  const handleSignOut = () => {
    localStorage.removeItem('token');
    navigate('/'); 
  };

  return (
    <div className="account">
      <h1>Account</h1>
      <div className="account-container">
        
        {userData ? (
          <>
            <div className= "Info-container">
              <p>To update user information, must provide current password.</p>
            </div>
            <div className="user-container">
              <h4>Username </h4>
              <p>{userData.username}</p>
              <h4>Change Username </h4>
              <input
                type="text"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
              />
            </div>
            <div className="email-container">
              <h4>Email</h4>
              <p>{userData.email}</p>
              <h4>Change Email </h4>
              <input
                type="email"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
              />
            </div>
            <div className="password-container">
              <h4>Enter current Password: </h4>
              <input
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
              <h4>Enter new Password: </h4>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
          </>
        ) : (
          <p>Loading user data...</p>
        )}
        <div className="button-container">
          <button onClick={handleUpdate}>Update</button>
          <button onClick={handleSignOut}>Sign out</button>
        </div>
      </div>
    </div>
  );
};

export default Account;
