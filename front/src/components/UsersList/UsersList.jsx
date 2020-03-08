import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function fetchUsers() {
  const usersList = JSON.stringify([
    {
      "id" : "0",
      "firstName": "Алексей",
      "secondName": "Черноусов",
      "group": "Руководство"
    },
    {
      "id" : "1",
      "firstName": "Дмитрий",
      "secondName": "Защучкин",
      "group": "Отдел кадров"
    },
    {
      "id" : "2",
      "firstName": "Роберт",
      "secondName": "Роджеров",
      "group": "Бухгалтерия"
    },
    {
      "id" : "3",
      "firstName": "Маттео",
      "secondName": "Продавщичкин",
      "group": "Отдел продаж"
    },
    {
      "id" : "4",
      "firstName": "Лорд",
      "secondName": "Андре",
      "group": "Руководство"
    }
  ]);

  return JSON.parse(usersList);
}

export default function UsersList() {
  const classes = useStyles();
  const [users, setUsers] = useState(fetchUsers());

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Имя</TableCell>
            <TableCell align="right">Фамилия</TableCell>
            <TableCell align="right">Группа</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map(user => (
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
    </TableContainer>        
  );
}