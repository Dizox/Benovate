import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import PopUp from '../PopUp/PopUp';
import './AddUser.css';

export default function AddUser({ users, fetchUsers}) {
  const [showPopUp, setShowPopUp] = useState(false);

  const addUser = (event) => {
    event.preventDefault();

    const newUser = {
      "firstName": event.target.firstName.value,
      "secondName": event.target.secondName.value,
      "group": event.target.group.value,
    };

    fetchUsers();
  }

  return (
    <div className="AddUser">
      <Button 
        className="UsersList__button" 
        variant="contained" 
        color="primary" 
        onClick={() => setShowPopUp(true)}
      >
        Добавить пользователя...
      </Button>
      
      {showPopUp && <PopUp />}
    </div>
  )
}
