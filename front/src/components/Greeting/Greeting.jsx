import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import './Greeting.css';

export default function Greeting() {
  return (
    <div className="Greeting">
      <Button component={Link} to='/UsersList' variant="contained" color="primary">
        Greeting
      </Button>
    </div>
  )
}
