import React, { useState, useEffect } from 'react';
import EnhancedTable from '../EnchancedTable/EnchancedTable';
import AddUser from '../AddUser/AddUser';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import './UsersList.css';

const initial = {
  firstName: '',
}

export default function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch('http://localhost:3636/users').then(r => r.json());
    setUsers(response);
  }

  return (
    <div className="UsersList">
      <Button className="UsersList__button" component={Link} to='/' variant="contained" color="default">
        Вернуться на главную страницу
      </Button>
      <AddUser users={ users } fetchUsers={ fetchUsers } />
      <EnhancedTable users={ users } />
    </div>
  );
}