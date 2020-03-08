import React, { useState, useEffect } from 'react';
import ReactVirtualizedTable from '../ReactVirtualizedTable/ReactVirtualizedTable';
import './UsersList.css';

const initial = {
  firstName: '',
}

export default function UsersList() {
  const [users, setUsers] = useState([]);
  const [inputValues, setInputValues] = useState();
  const [sortDirectionFromHighest, setSortDirectionFromHighest] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch('http://localhost:3636/users').then(r => r.json());
    setUsers(response);
  }

  const addUser = (event) => {
    event.preventDefault();

    const newUser = {
      "firstName": event.target.firstName.value,
      "secondName": event.target.secondName.value,
      "group": event.target.group.value,
    };

    //socket.emit('add user', newUser);
    fetchUsers();
  }

  function compare(a, b, sortField) {
    if (sortDirectionFromHighest) {
      return a[sortField] < b[sortField] ? -1 : 1;
    } else {
      return a[sortField] > b[sortField] ? -1 : 1;
    }
  }

  const usersSort = (sortField) => {
    console.log('test')

    //change sort direction
    setSortDirectionFromHighest(!sortDirectionFromHighest)

    setUsers(state => [...state].sort((a, b) => compare(a, b, sortField)));
  }


  return (
    <div className="UsersList">
      <form onSubmit={(event) => addUser(event)}>
        <input type="text" name="firstName" placeholder="Введите имя"/>
        <input type="text" name="secondName" placeholder="Введите фамилию"/>
        <input type="text" name="group" placeholder="Введите группу"/>
        <button type="submit">Добавить пользователя</button>
      </form>

      <ReactVirtualizedTable users={users} usersSort={usersSort} />

      {/* <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell onClick={() => !sorting && usersSort('firstName')}>Имя</TableCell>
              <TableCell align="right" onClick={() => !sorting && usersSort('secondName')}>Фамилия</TableCell>
              <TableCell align="right" onClick={() => !sorting && usersSort('group')}>Группа</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users && users.map(user => (
              <TableRow key={user.id}>
                <TableCell component="th" scope="row">
                  {user.firstName}
                </TableCell>
                <TableCell align="right">{user.secondName}</TableCell>
                <TableCell align="right">{user.group}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer> */}
    </div>
  );
}