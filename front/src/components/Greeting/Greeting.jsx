import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import './Greeting.css';

export default function Greeting() {
  return (
    <div className="Greeting">
      <div className="Greeting__container">
        <div className="Greeting__title">
          Тестовое задание для BENOVATE
        </div>
        <Button component={Link} to='/UsersList' variant="contained" color="primary">
          Начать работу с таблицей!
        </Button>
      </div>
    </div>
  )
}
